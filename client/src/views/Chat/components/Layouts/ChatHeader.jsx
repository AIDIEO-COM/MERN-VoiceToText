

const ChatHeader = () => {
    return (
        <div>
            <div className="app-header text-center">
                <img src="/images/text_only_blue.png" alt="Fysio.AI Logo" className="header-logo" />
            </div>


            <div className="button-group mt-4 mb-4 text-center">

                <button id="startButton" className="control-btn start-btn" title="Klik om de opname te starten">
                    <i className="fas fa-play"></i>Start Opname
                </button>
                <button id="pauseButton" className="control-btn pause-btn" title="Klik om de opname te pauzeren" style={{ display: "none" }}>
                    <i className="fas fa-pause"></i>Pauzeer Opname
                </button>
                <button id="resumeButton" className="control-btn resume-btn" title="Klik hier om door te gaan met de huidige opname" style={{ display: "none" }}>
                    <i className="fas fa-play"></i>Doorgaan met Opnemen
                </button>
                <button id="stopButton" className="control-btn stop-btn" title="Klik hier om de opname te stoppen en op te slaan" style={{ display: "none" }}>
                    <i className="fas fa-stop"></i>Stop Opname en maak samenvatting
                </button>
            </div>


            <div className="language-selection mt-4 mb-4 text-center">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="languageOptions" id="nederlands" value="Nederlands"
                        defaultChecked />
                    <label className="form-check-label" htmlFor="nederlands">Nederlands</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="languageOptions" id="engels" value="Engels" />
                    <label className="form-check-label" htmlFor="engels">Engels</label>
                </div>
            </div>


            <div id="statusMessage" className="mt-3 mb-3 text-center"></div>

            <div id="noSoundMessage" className="mt-3 mb-3 text-center warning-message" style={{ display: 'none' }}>Geen geluid gedetecteerd voor 10 seconden.</div>


        </div>
    )
}

export default ChatHeader