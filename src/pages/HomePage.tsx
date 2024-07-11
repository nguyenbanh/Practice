import { Splide, SplideSlide } from "@splidejs/react-splide";

const splideImgs = [
  "./common/images/banner1.png",
  "./common/images/banner2.png",
  "./common/images/banner3.png",
  "./common/images/banner4.png",
];

export const HomePage = () => {
  return (
    <div id="container" className="container">
      <div className="main" id="home"></div>
      <div id="contents" className="contents">
        <section className="section company">
          <div className="inner_sm">
            <div className="section_content element translateup" id="company">
              <h2>
                <img src="./common/images/about-us.svg" alt="Maté Gourd" />
              </h2>
              <dl className="list_text">
                <dt>Maté Gourd - Trà Yerba Maté Nam Mỹ</dt>
                <dd>
                  <p>Chào mừng bạn đến với cửa hàng của chúng tôi!</p>
                  <p>
                    Chúng tôi là địa điểm lý tưởng cho những người yêu thích trà
                    Yerba Maté và Phụ Kiện Thủ Công đi kèm.
                  </p>
                  <p>
                    Tại đây, bạn sẽ tìm thấy một loạt các loại trà Yerba Maté và
                    phụ kiện chất lượng cao để cùng trải nghiệm vị thơm ngon và
                    truyền thống của trà Maté.
                  </p>
                  <p>
                    Hãy cùng chúng tôi khám phá và chia sẻ niềm đam mê với trà
                    Yerba Maté nhé!.
                  </p>
                </dd>
              </dl>
            </div>
          </div>
        </section>
        <section className="section products">
          <div className="bg_section bg_product">Mate Gourd</div>
          <div className="inner_sm">
            <div
              className="section_content element translateup"
              id="products-info"
            >
              <h2>
                <img src="./common/images/gourd.svg" alt="Maté Gourd" />
              </h2>
              <p>
                Cốc Gourd, làm từ quả bầu Calabash, không chỉ là biểu tượng của
                văn hóa uống trà Nam Mỹ mà còn là cách thưởng thức trọn vẹn
                hương vị và lợi ích sức khỏe của trà Yerba Mate, kết hợp hoàn
                hảo giữa truyền thống và vị giác độc đáo.
              </p>
              <Splide options={{ rewind: true, gap: "1rem" }}>
                {splideImgs.map((item) => (
                  <SplideSlide key={item}>
                    <img src={item} alt="Maté Gourd" />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </div>
        </section>
        <section className="section yerbamate">
          <div className="bg_section bg_yerbamate">Yerba Mate</div>
          <div className="inner_sm">
            <div className="section_content element translateup" id="yerbamate">
              <h2>
                <img src="./common/images/mate.svg" alt="Maté Gourd" />
              </h2>
              <p>
                Trà Yerba Mate, một biểu tượng không thể thiếu của Nam Mỹ, không
                chỉ nổi tiếng với hương vị độc đáo mà còn là nguồn dinh dưỡng
                phong phú. Được chiết xuất từ lá cây Mate, loại trà này mang đến
                sự tươi mới, năng lượng và nhiều lợi ích sức khỏe, là người bạn
                đồng hành lý tưởng mỗi ngày, kết nối mọi người thông qua nghi lễ
                uống trà truyền thống và đầy ý nghĩa.
              </p>
              <div className="mate">
                <figure>
                  <img src="./common/images/yerba-mate1.jpg" alt="Maté Gourd" />
                </figure>
                <figure>
                  <img src="./common/images/yerba-mate2.jpg" alt="Maté Gourd" />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className="section shopping">
          <div className="bg_section bg_shopping">shopping</div>
          <div className="inner_sm">
            <div className="section_content element translateup" id="shopping">
              <h2>
                <img src="./common/images/shopping.svg" alt="Maté Gourd" />
              </h2>
              <div className="shopee">
                <a target="_blank" href="https://shopee.vn/mategourd">
                  <img src="./common/images/shopee.png" />
                </a>
              </div>
              <div className="list_text">
                <a
                  className="pc"
                  target="_blank"
                  href="https://shopee.vn/mategourd"
                >
                  <img
                    src="./common/images/shipping.png"
                    alt="Maté Gourd Shipping"
                  />
                </a>
                <a
                  className="sp"
                  target="_blank"
                  href="https://shopee.vn/mategourd"
                >
                  <img
                    src="./common/images/shipping_sp.png"
                    alt="Maté Gourd Shipping"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section contact">
          <div className="inner_sm">
            <div className="section_content element fade" id="contact">
              <h2>
                <img src="./common/images/contact-us.svg" alt="Maté Gourd" />
              </h2>
              <div className="contact_form">
                <div className="contact_form-left">
                  <ul>
                    <li>
                      <i className="fas fa-home"></i> Maté Gourd - Trà Yerba
                      Maté Nam Mỹ
                    </li>
                    <li>
                      <i className="fab fa-facebook-square"></i>
                      <a
                        href="https://www.facebook.com/mategourdvn/"
                        target="_blank"
                      >
                        https://www.facebook.com/mategourdvn
                      </a>
                    </li>
                    <li className="mail">
                      <i className="fas fa-envelope"></i>
                      <a href="mailto:info@mategourd.vn">info@mategourd.vn</a>
                    </li>
                    <li className="phone">
                      <i className="fas fa-phone"></i>
                      <a href="tel:0586899777">05 868 99 777</a>
                    </li>
                  </ul>
                  <div
                    className="fb-messengermessageus"
                    //   messenger_app_id="127461360442804"
                    //   page_id="127461360442804"
                    color="blue"
                  ></div>
                </div>
                <div className="contact_form-right">
                  <div
                    className="fb-page"
                    data-href="https://www.facebook.com/mategourdvn/"
                    data-tabs="timeline"
                    data-small-header="false"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="true"
                  >
                    <blockquote
                      cite="https://www.facebook.com/mategourdvn/"
                      className="fb-xfbml-parse-ignore"
                    >
                      <a href="https://www.facebook.com/mategourdvn/">
                        Maté Gourd - Trà Yerba Maté Nam Mỹ
                      </a>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
