import { useRef } from "react";

const SummaryBox = ({ label, id, value, onChange }) => {

    // ref textarea
    const textareaRef = useRef(null);

    // copy text action
    const handleCopy = () => {
        textareaRef.current.select();
        document.execCommand('copy');
    };

    return (
        <div className="summary-box">
            <div className="box-title">{label}</div>
            <textarea
                id={id}
                rows="4"
                className="form-control"
                value={value}
                onChange={onChange}
            >
            </textarea>

            <div className="button-container">
                <button
                    onClick={handleCopy}
                    className="copy-button">
                    <i className="far fa-copy"></i>
                </button>

                <button
                    type="button"
                    className="feedback-button"
                    data-bs-toggle="modal"
                    data-bs-target="#feedbackModal1"
                >
                    <i className="fas fa-comment-dots"></i>
                    Feedback
                </button>
            </div>

        </div>
    )
}

export default SummaryBox