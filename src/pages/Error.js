import { Link } from "react-router-dom"
import '../styles/style_pages/Error.css'
import Logo from "../components/logo"

export default function Error() {
    document.title = "Error page - not found in wivy"
    return (
        <div className="Error">
            <div className="error">
                <h2>هذه الصفحة غير موجودة 404 خطأ</h2>
                <Logo size="100px" />
                <h4>
                    هفوا هذه الصفحة غير موجودة
                </h4>
                <Link to='/'>الرجوغ للصفحة الرئيسية</Link>
            </div>
        </div>
    )
}