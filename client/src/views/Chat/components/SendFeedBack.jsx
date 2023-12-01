import { useState } from 'react';
import FeedbackModal from '../partials/FeedbackModal'

const SendFeedBack = ({ loading, sendFeedbackAPI }) => {

    // states
    const [feedback, setFeedback] = useState('');

    return (
        <div>
            <div className="text-center mt-4">
                <button
                    className="btn btn-custom"
                    data-bs-toggle="modal"
                    data-bs-target="#feedbackModal"
                >
                    Send Feedback
                </button>
            </div>

            <FeedbackModal
                id='feedbackModal'
                label='feedbackModalLabel'
                feedback={feedback}
                setFeedback={setFeedback}
                loading={loading}
                sendFeedbackAPI={sendFeedbackAPI}
            />
        </div>
    )
}

export default SendFeedBack