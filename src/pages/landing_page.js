import { useContext, useEffect } from "react";
import { ContextBox } from "../context/context";
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import '../styles/style_pages/landing_page.css';
import { Link } from "react-router-dom";

export default function LandingPage() {
    const { activate } = useContext(ContextBox);
    console.log(activate);

    useEffect(() => {
        new Swiper('.swiper', {
            modules: [Navigation, Pagination, Autoplay, EffectFade], 
            loop: true,
            navigation: true,
            pagination: { clickable: true },
            autoplay: {
                delay: 3000, 
                disableOnInteraction: false, 
            },
            effect: 'fade', 
            fadeEffect: {
                crossFade: true, 
            },
        });
    }, []);

    useEffect(() => {
        new Swiper('.swiper2', {
            modules: [Navigation, Pagination, Autoplay], 
            loop: true,
            navigation: true,
            pagination: { clickable: true },
            autoplay: {
                delay: 3000, 
                disableOnInteraction: false, 
            },
            slidesPerView: 3,  // لعرض 3 شرائح في نفس الوقت
            spaceBetween: 20,  // المسافة بين الشرائح
            breakpoints: {
                768: {
                    slidesPerView: 3,  // عند حجم الشاشة 768px أو أقل
                },
                480: {
                    slidesPerView: 1,  // عند حجم الشاشة 480px أو أقل
                },
            },
        });
    }, []);

    return (
        <div className="main">
            <div className="news">
                <div className="swiper">
                    <div className="swiper-wrapper">
                        <div
                            className="bg swiper-slide"
                            style={{
                                backgroundImage: `url(${require("../public/news/1.jpg")})`
                            }}
                        ></div>
                        <div
                            className="bg swiper-slide"
                            style={{
                                backgroundImage: `url(${require("../public/news/2.jpg")})`
                            }}
                        ></div>
                        <div
                            className="bg swiper-slide"
                            style={{
                                backgroundImage: `url(${require("../public/news/3.jpg")})`
                            }}
                        ></div>
                        <div className="shpae-triangle"></div>
                        <div className="shpae-triangle1"></div>
                    </div>
                </div>
            </div>
            <div className="about-us">
                <div id="about" className="img-title">
                    <h2>من نحن</h2>
                    <div className="img" style={{backgroundImage: `url(${require('../public/about-us/1.jpg')})`}}></div>
                </div>
                <div className="child">
                    <p>
                        منذ أكثر من عشر سنوات، تحتل شركة ويفي مكانة رائدة في عالم تصميم الستائر نحن في ويفي ملتزمون بتقديم أحدث الابتكارات وأعلى معايير الجودة، لنحول كل مساحة إلى تحفة فنية تعكس الذوق الرفيع...
                    </p>
                </div>
            </div>
            <div className="advantage">
                <div className="card">
                    <i className="fa-solid fa-money-bill"></i>
                    <p>تمكين فريقنا من تقديم جودة عالية وبأسعار تنافسية</p>
                    <h4>اسعارنا</h4>
                </div>
                <div className="card">
                    <i className="fa-solid fa-eye"></i>
                    <p>تمكين فريقنا من تقديم جودة عالية وبأسعار تنافسية</p>
                    <h4>رؤيتنا</h4>
                </div>
                <div className="card">
                    <i className="fa-solid fa-headset"></i>
                    <p>خدمة 24 ساعة اينما كنت</p>
                    <h4>خدمة العملاء</h4>
                </div>
            </div>
            <div className="popular-curtains">
                <h3>الستائر الأكثر مبيعا</h3>
                <div className="part part1">
                    <div className="cur curtain1">
                        <div className="img" style={{backgroundImage: `url(${require('../public/popular/1.jpg')})`}}></div>
                        <h4>ستائر الويفي</h4>
                        <p>تتميز الستائر الويفي بتصميمها العصري وأمواجها الناعمة التي تضفي شعورًا بالراحة والحركة في المكان...</p>
                    </div>
                    <div className="cur curtain2">
                        <div className="img" style={{backgroundImage: `url(${require('../public/popular/2.jpg')})`}}></div>
                        <h4>ستائر الاســكــاي لايــت</h4>
                        <p>تخفف من حدة النور أو سـطوع أشـعة الشمس خصوصاً في الصيف...</p>
                    </div>
                </div>
                <div className="part">
                    <div className="cur curtain3">
                        <div className="img" style={{backgroundImage: `url(${require('../public/popular/4.jpg')})`}}></div>
                        <h4>سكرين الأمريكية</h4>
                        <p>تمثل الستائر الأمريكية الخيار الأمثل لمن يسعى إلى الأناقة الكلاسيكية والفخامة...</p>
                    </div>
                    <div className="cur curtain2">
                        <div className="img" style={{backgroundImage: `url(${require('../public/popular/5.jpg')})`}}></div>
                        <h4>الستائر الرومانية</h4>
                        <p>تجمع الستائر الرومانية بين الطابع التقليدي واللمسة المصرية...</p>
                    </div>
                </div>
                <div className="see-more">
                    <Link>رؤية المزيد</Link>
                </div>
            </div>
            <div className="customers">
                <h3>العملاء المميزين</h3>
                <div className="swiper2">
                    <div className="swiper-wrapper">
                        <div style={{
                            backgroundImage: `url(${require('../public/cusotmers/bg-remove/fairmont-removebg-preview.png')})`
                        }} className="bg2 swiper-slide"></div>
                        <div style={{
                            backgroundImage: `url(${require('../public/cusotmers/bg-remove/iberotelluxor-removebg-preview.png')})`
                        }} className="bg2 swiper-slide"></div>
                        <div style={{
                            backgroundImage: `url(${require('../public/cusotmers/bg-remove/Laguna-removebg-preview.png')})`
                        }} className="bg2 swiper-slide"></div>
                        <div style={{
                            backgroundImage: `url(${require('../public/cusotmers/bg-remove/Pickalbatros-removebg-preview.png')})`
                        }} className="bg2 swiper-slide"></div>
                    </div>
                </div>
            </div>
            <div className="Opinions-title">
                <h3>اراء عملائنا عنا</h3>
            </div>
            <div className="Opinions">
                <div className="box">
                    <p>
                    ستائر ويفي تتميز بتصميماتها العصرية والأنيقة، خاصة تلك التي تجمع بين البساطة والجمال. ما يميزها هو التنوع في الخامات والألوان، مما يسمح باختيار الستائر المناسبة لأي ديكور أو مساحة. بالإضافة إلى ذلك، جودة المواد المستخدمة تعكس الاهتمام بالتفاصيل وتضمن المتانة والراحة.
                    </p>
                    <div className="info-person">
                        <div className="img-person"></div>
                        <h4>زياد فوزي</h4>
                    </div>
                </div>
                <div className="box">
                    <p>
                    ستائر ويفي تتميز بتصميماتها العصرية والأنيقة، خاصة تلك التي تجمع بين البساطة والجمال. ما يميزها هو التنوع في الخامات والألوان، مما يسمح باختيار الستائر المناسبة لأي ديكور أو مساحة. بالإضافة إلى ذلك، جودة المواد المستخدمة تعكس الاهتمام بالتفاصيل وتضمن المتانة والراحة.
                    </p>
                    <div className="info-person">
                        <div className="img-person"></div>
                        <h4>زياد فوزي</h4>
                    </div>
                </div>
                <div className="box">
                    <p>
                    ستائر ويفي تتميز بتصميماتها العصرية والأنيقة، خاصة تلك التي تجمع بين البساطة والجمال. ما يميزها هو التنوع في الخامات والألوان، مما يسمح باختيار الستائر المناسبة لأي ديكور أو مساحة. بالإضافة إلى ذلك، جودة المواد المستخدمة تعكس الاهتمام بالتفاصيل وتضمن المتانة والراحة.
                    </p>
                    <div className="info-person">
                        <div className="img-person"></div>
                        <h4>زياد فوزي</h4>
                    </div>
                </div>
                <div className="box">
                    <p>
                    ستائر ويفي تتميز بتصميماتها العصرية والأنيقة، خاصة تلك التي تجمع بين البساطة والجمال. ما يميزها هو التنوع في الخامات والألوان، مما يسمح باختيار الستائر المناسبة لأي ديكور أو مساحة. بالإضافة إلى ذلك، جودة المواد المستخدمة تعكس الاهتمام بالتفاصيل وتضمن المتانة والراحة.
                    </p>
                    <div className="info-person">
                        <div className="img-person"></div>
                        <h4>زياد فوزي</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
