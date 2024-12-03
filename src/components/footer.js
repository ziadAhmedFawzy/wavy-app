import { Link } from "react-router-dom";
import '../styles/style_components/footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="header">
                <div className="follow-by-email">
                    <h5>اشترك في بريدنا الإلكتروني</h5>
                    <p>الإلهام والعروض الخاصة والمزيد</p>
                    <form>
                        <input type="text" placeholder="ادهل بريدك الألكتروني لمعرفة كل جديد" />
                        <button type="submit">اشترك</button>
                    </form>
                </div>
                <img width='300px' src={require('../public/logo/wihite_wavy.png')} alt="logo_wavy" />
            </div>
            <div className="quick-links">
                <ul>
                    <h5>الستائر</h5>
                    <li><Link to='/curtains'>ستائر الويفي</Link></li>
                    <li><Link to='/curtains'>ستائر الاســكــاي لايــت</Link></li>
                    <li><Link to='/curtains'>الســتائـــر الرومــانـــيــة</Link></li>
                    <li><Link to='/curtains'>الستائر الرول</Link></li>
                    <li><Link to='/curtains'>الستائر المعدنية</Link></li>
                    <li><Link to='/curtains'>الستائر الخشبية</Link></li>
                    <li><Link to='/curtains'>ستائر الزيبرا</Link></li>
                    <li><Link to='/curtains'>ستائر العمودية</Link></li>
                    <li><Link to='/curtains'>ستائر المستشفيات</Link></li>
                </ul>
                <ul>
                    <h5>خدمة العملاء</h5>
                    <li><Link to='/curtains'>اتصل بنا</Link></li>
                    <li><Link to='/curtains'>الأسئلة الشائعة</Link></li>
                </ul>
                <ul>
                    <h5>التغطية العالمية</h5>
                    <li><Link to='#'>المملكة العربية السعودية</Link></li>
                    <li><Link to='#'>مصر</Link></li>
                </ul>
            </div>
        </footer>
    )
}