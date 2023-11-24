import FeedbackModal from '../partials/FeedbackModal'

const SendFeedBack = () => {
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
            />
        </div>
    )
}

export default SendFeedBack