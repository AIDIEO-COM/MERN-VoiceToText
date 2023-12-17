import CourseInfoWrap from "../partials/Banner/CourseInfoWrap";
import HeadingWrap from "../partials/Banner/HeadingWrap";
import ButtonWrap from "../partials/Banner/ButtonWrap";

const Banner = () => {
    return (
        <header data-aos="fade-down" data-aos-duration="1500"  >
            <div id="banner" className="hero-section">
                <div className="custom-container">
                    <div className="w-layout-grid banner-grid">
                        <div id="w-node-_2e26540b-db34-503c-dd8c-cc4db4113f74-cf4aff70" className="banner-content">
                            <HeadingWrap />
                            <p className="paragraph">Focus op zorg, niet op papierwerk.</p>
                            <div className="banner-button-wrapper">
                                <ButtonWrap />
                                <CourseInfoWrap />
                            </div>
                        </div>
                        <div className="banner-image-wrapper">
                            <div data-w-id="d026448e-787d-1e13-09ef-61d5fe5f8378" style={{ paddingTop: '56.17021276595745%' }} className="video w-video w-embed">
                                <iframe
                                    className="embedly-embed"
                                    src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FHY0trj62iDQ%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DHY0trj62iDQ&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FHY0trj62iDQ%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube"
                                    width="940"
                                    height="528"
                                    scrolling="no"
                                    allowFullScreen=""
                                    title="Ontdek fysio.ai: Revolutionaire Tool voor Fysiotherapeuten"
                                ></iframe>
                            </div>
                            <div data-w-id="3d678747-1001-657d-5060-7646afc5c711" className="banner-image-card">
                                <div className="text-block">Bekijk de<br />Video!</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Banner;