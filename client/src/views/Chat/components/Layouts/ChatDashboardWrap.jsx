import ChatNavbar from "./ChatNavbar"
import '../../styles/main_page.css'
import '../../styles/header.css'
import '../../styles/navbar.css'

const ChatDashboardWrap = ({ children }) => {
    return (
        <>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet" />

            <ChatNavbar />

            {children}
        </>
    )
}

export default ChatDashboardWrap