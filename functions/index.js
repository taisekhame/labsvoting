const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.firestore();

// Webhook function
exports.paymentWebhook = functions.https.onRequest(async (req, res) => {
    try {
        // Extract data from the request body
        const { transactionId, transactionDetails, nomineeId, nomineeName, numberOfVotes, amountPaid, email } = req.body;

        // Validate required fields
        if (!transactionId || !nomineeId || !numberOfVotes || !amountPaid || !email) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Save payment data to Firestore
        await db.collection('payments').doc(transactionId).set({
            transactionId,
            transactionDetails,
            nomineeId,
            nomineeName,
            numberOfVotes,
            amountPaid,
            email,
            timestamp: admin.firestore.FieldValue.serverTimestamp(),
        });

        // Update nominee's vote count in Firestore if the nominee exists
        const nomineeRef = db.collection('Nominee').doc(nomineeId);
        await db.runTransaction(async (transaction) => {
            const nomineeDoc = await transaction.get(nomineeRef);

            if (nomineeDoc.exists) {
                // If the nominee exists, increment the vote count
                const currentVoteCount = nomineeDoc.data().voteCount || 0;
                transaction.update(nomineeRef, {
                    voteCount: currentVoteCount + numberOfVotes,
                });
            } else {
                console.log(`Nominee with ID ${nomineeId} does not exist. Skipping update.`);
            }
        });

        res.status(200).json({ message: 'Webhook data saved successfully and vote count updated for existing nominee' });
    } catch (error) {
        console.error('Error processing webhook:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
