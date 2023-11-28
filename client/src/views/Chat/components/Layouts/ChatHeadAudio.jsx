import AudioReactRecorder from 'audio-react-recorder';
import { useEffect, useState } from 'react';
import { formatTime } from '../../../../hooks/helpers';
import { axiosPOST } from '../../../../hooks/axiosMethods';
import { useAtom } from 'jotai';
import { atomToken } from '../../../../configs/states/atomState';

const ENUM_STATUS = {
    NONE: 'none',
    START: 'start',
    PAUSE: 'pause',
    STOP: 'stop'
}

const ChatHeadAudio = ({ setTextContent }) => {

    // atom states
    const [token] = useAtom(atomToken);

    // states
    // eslint-disable-next-line no-unused-vars
    const [audio, setAudio] = useState(null);
    const [apiCallSuccess, setApiCalSuccess] = useState(false);
    const [recordState, setRecordState] = useState(ENUM_STATUS.NONE);
    const [loading, setLoading] = useState(false);
    const [loadingDots, setLoadingDots] = useState(0);
    const [startTime, setStartTime] = useState(null);
    const [totalElapsedTime, setTotalElapsedTime] = useState(0);

    const [content, setContent] = useState();

    // handler
    const startRecording = () => {
        if (recordState !== ENUM_STATUS.START) {
            setStartTime(new Date());
        }
        setRecordState(ENUM_STATUS.START);
    };

    const pauseRecording = () => {
        if (recordState === ENUM_STATUS.START) {
            updateTotalElapsedTime();
        }
        setRecordState(ENUM_STATUS.PAUSE);
    };

    const stopRecording = () => {
        if (recordState === ENUM_STATUS.START) {
            updateTotalElapsedTime();
        }
        setRecordState(ENUM_STATUS.STOP);
    };

    const onSave = async (audioData) => {
        setAudio(audioData);

        // Send the audio file to the server
        if (audioData.blob) {
            const formData = new FormData();
            formData.append('audio', audioData.blob, 'audio.wav');

            try {
                const response = await axiosPOST('chat', formData, setLoading, token);
                setApiCalSuccess(response.success)
                setContent(response.data?.chat?.content)
            } catch (error) {
                setLoading(false);
                console.error('Error sending audio to the server:', error);
            }
        }
    };

    const updateTotalElapsedTime = () => {
        if (startTime) {
            const now = new Date();
            const elapsedSeconds = Math.floor((now - startTime) / 1000);
            setTotalElapsedTime(totalElapsedTime + elapsedSeconds);
            setStartTime(null); // Reset startTime after updating totalElapsedTime
        }
    };

    useEffect(() => {
        if (recordState === ENUM_STATUS.START) {
            setStartTime(new Date());
            const intervalId = setInterval(updateTotalElapsedTime, 1000);
            return () => clearInterval(intervalId);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [recordState]);

    // loading dots
    useEffect(() => {
        const interval = setInterval(() => {
            // Update loading dots
            setLoadingDots((prevDots) => (prevDots + 1) % 4);

            // Reset loading after 4 seconds
            if (loadingDots === 3) {
                setLoadingDots(0);
            }
        }, 1000);

        // Clear interval when the component unmounts
        return () => clearInterval(interval);
    }, [loadingDots]);

    // useEffect to set content
    useEffect(() => {
        if (content && apiCallSuccess) {
            // Use regular expression to extract the "You" object
            const match = content.match(/You:\s*([\s\S]*?)\}/);

            if (match && match[1]) {
                // Extract the matched JSON object
                const youValue = match[1] + '}';

                // Parse the JSON object
                const youObject = JSON.parse(youValue);
                const arrayOfObjects = Object.values(youObject);
                setTextContent(arrayOfObjects);
            } else {
                console.log('No match found.');
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [content, apiCallSuccess])

    return (
        <>
            <div className="app-header text-center">
                <img src="/images/text_only_blue.png" alt="Fysio.AI Logo" className="header-logo" />
            </div>

            <AudioReactRecorder
                state={recordState}
                onStop={onSave}
                canvasWidth={0}
                canvasHeight={0}
            />

            <div className="button-group mt-4 mb-4 text-center">

                {recordState === ENUM_STATUS.NONE && <button
                    id="startButton"
                    className="control-btn start-btn"
                    title="Klik om de opname te starten"
                    onClick={startRecording}
                >
                    <i className="fas fa-play"></i>Start Opname
                </button>}

                {recordState === ENUM_STATUS.START && <>
                    <button
                        id="pauseButton"
                        className="control-btn pause-btn"
                        title="Klik om de opname te pauzeren"
                        onClick={pauseRecording}
                    >
                        <i className="fas fa-pause"></i>Pauzeer Opname
                    </button>
                </>}

                {recordState === ENUM_STATUS.PAUSE && <>
                    <button
                        id="resumeButton"
                        className="control-btn resume-btn"
                        title="Klik hier om door te gaan met de huidige opname"
                        onClick={startRecording}
                    >
                        <i className="fas fa-play"></i>Doorgaan met Opnemen
                    </button>


                    <button
                        id="stopButton"
                        className="control-btn stop-btn"
                        title="Klik hier om de opname te stoppen en op te slaan"
                        onClick={stopRecording}
                    >
                        <i className="fas fa-stop"></i>Stop Opname en maak samenvatting
                    </button>
                </>}
            </div>

            <div className="language-selection mt-4 mb-4 text-center">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="languageOptions" id="nederlands" value="Nederlands"
                        defaultChecked />
                    <label className="form-check-label" htmlFor="nederlands" style={{ fontWeight: 400 }}>Nederlands</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="languageOptions" id="engels" value="Engels" />
                    <label className="form-check-label" htmlFor="engels" style={{ fontWeight: 400 }}>Engels</label>
                </div>
            </div>

            <div className="mt-3 mb-3 text-center">
                {((recordState !== ENUM_STATUS.NONE && !loading) && (recordState !== ENUM_STATUS.NONE && !apiCallSuccess)) &&
                    <>
                        Start Recording {totalElapsedTime > 0 && formatTime(totalElapsedTime)}
                    </>
                }

                {(loading) && 'Bezig met verwerken⌛️' + '.'.repeat(loadingDots)}
                {apiCallSuccess && 'Bekijk het resultaat! 🚀'}
            </div>

            <div id="noSoundMessage" className="mt-3 mb-3 text-center warning-message" style={{ display: 'none' }}>
                Geen geluid gedetecteerd voor 10 seconden.
            </div>

        </>
    )
}

export default ChatHeadAudio