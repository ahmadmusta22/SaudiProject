import React from "react";
import { Link } from "react-router-dom";

const FaqAreaOne = () => {
  return (
    <section className="faq-area-1 space-bottom mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="title-area mb-lg-0">
              <span className="sub-title">هدفنا مساعدتك </span>
              <h2 className="sec-title">
                الاسئله الشائعه
              </h2>
              <p className="sec-text">
               
              </p>
              <div className="btn-wrap mt-30">
                <Link className="btn style2" to="/contact">
                  Read More <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="accordion-area accordion" id="faqAccordion">
              <div className="accordion-card active">
                <div className="accordion-header" id="collapse-item-1">
                  <button
                    className="accordion-button "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-1"
                    aria-expanded="true"
                    aria-controls="collapse-1"
                  >
                    {" "}
                   	ما هي شروط القبول في معاهد التمثيل؟
                    </button>
                </div>
                <div
                  id="collapse-1"
                  className="accordion-collapse collapse show"
                  aria-labelledby="collapse-item-1"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                    تختلف شروط القبول من معهد لآخر، ولكن غالبًا تشمل اجتياز اختبار أداء (أوديشن)، مقابلة شخصية، توفر شهادة دراسية معينة (مثل الثانوية العامة)، والقدرة على الالتزام بالتدريب.
{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card ">
                <div className="accordion-header" id="collapse-item-2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-2"
                    aria-expanded="false"
                    aria-controls="collapse-2"
                  >
                    {" "}
                    هل يشترط وجود خبرة سابقة في التمثيل للالتحاق بالمعهد؟
                    </button>
                </div>
                <div
                  id="collapse-2"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-2"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                    ليس بالضرورة، فبعض المعاهد تقبل المبتدئين، بينما يُفضل البعض الآخر أن يكون لدى المتقدمين خبرة سابقة أو مشاركة في أعمال مسرحية أو ورش تدريبية.

</p>
                  </div>
                </div>
              </div>
              <div className="accordion-card ">
                <div className="accordion-header" id="collapse-item-3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-3"
                    aria-expanded="false"
                    aria-controls="collapse-3"
                  >
                    {" "}
                    ما هي مدة الدراسة في معاهد التمثيل؟
                    </button>
                </div>
                <div
                  id="collapse-3"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-3"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                    تختلف المدة حسب المعهد والبرنامج، ولكنها غالبًا تتراوح بين سنتين إلى أربع سنوات، بينما توجد برامج قصيرة لمدة بضعة أشهر.


                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card ">
                <div className="accordion-header" id="collapse-item-4">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-4"
                    aria-expanded="false"
                    aria-controls="collapse-4"
                  >
                    {" "}
                    ما المواد أو المهارات التي يتم تدريسها في معاهد التمثيل؟
                    </button>
                </div>
                <div
                  id="collapse-4"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-4"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                    يتم تدريس مواد مثل التمثيل المسرحي والسينمائي، الإلقاء، التعبير الجسدي، التحليل الدرامي، الصوت، الأداء الحركي، الارتجال، تاريخ المسرح، والإخراج.


                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAreaOne;
