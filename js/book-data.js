/* language: JavaScript, file: book-data.js, purpose: Kuwait Grade 10 Chemistry — full content + Q&A */

const BOOK = {
  meta: {
    title_en: "Chemistry — Student Book, Grade 10, First Semester",
    title_ar: "الكيمياء — كتاب الطالب، الصف العاشر، الفصل الدراسي الأول",
    publisher_en: "Ministry of Education — State of Kuwait",
    publisher_ar: "وزارة التربية — دولة الكويت",
    edition_en: "First Edition, 1448 AH / 2026–2027 CE",
    edition_ar: "الطبعة الأولى، ١٤٤٨ هـ / ٢٠٢٦–٢٠٢٧ م",
    isbn: "978-9921-33-130-1",
    authors_ar: [
      "أ. دلال سعد المسعود (مشرفاً)",
      "أ. عيسى منهل القلاف (رئيساً)",
      "أ. عبدالله محمد الجوير",
      "أ. ريم عبدالله العتيبي",
      "أ. حصة موسى العجمي",
      "أ. سماح عبدالرحمن الخضير",
      "أ. شيماء إبراهيم جمال"
    ],
    supervision_ar: ["أ. طارق شهاب حميد المطيري"],
    lang_review_ar: ["أ. منى منصور العجمي", "أ. سكتة العازمي"],
    design_ar: ["أ. مريم ناصر فراج الفراج"]
  },
  units: [
    {
      id: "u1",
      en: "Unit 1: Electrons in Atoms and Periodicity of Elements",
      ar: "الوحدة الأولى: الإلكترونات في الذرات ودورية العناصر",
      chapters: [
        {
          id: "u1c1",
          en: "Chapter 1: Atomic Models",
          ar: "الفصل الأول: نماذج الذرة",
          lessons: [
            {
              id: "u1c1l1",
              en: "Lesson 1-1: The Science of Chemistry",
              ar: "الدرس (1-1): علم الكيمياء",
              sections: [
                {
                  h_en: "Definition of Chemistry",
                  h_ar: "تعريف علم الكيمياء",
                  p_en: "Chemistry is «the science that studies the composition of matter, its properties, the changes that occur to it, and the energy accompanying these changes.» It is described as «The Central Science» because of its pivotal role in linking branches of natural science such as physics, biology, and geology.",
                  p_ar: "الكيمياء هي «العلم الذي يدرس تركيب المادة وخواصها والتغيرات التي تطرأ عليها والطاقة المصاحبة لهذه التغيرات». ويوصف بأنه «العلم المركزي» لما له من دور محوري في الربط بين فروع العلوم الطبيعية مثل الفيزياء والأحياء والجيولوجيا."
                },
                {
                  h_en: "Matter and the Atom",
                  h_ar: "المادة والذرة",
                  p_en: "Matter is «everything that has mass and occupies a space of void.» Matter is composed of a very small particle called the atom, defined as «the smallest part of an element that retains the properties of that element.»",
                  p_ar: "تُعرّف المادة بأنها «كل ما له كتلة ويشغل حيزاً من الفراغ». تتكوّن المادة في جوهرها من جسيم متناهي في الصغر يسمى الذرة، وهي «الجزء الأصغر من العنصر ويحتفظ بخواص ذلك العنصر»."
                },
                {
                  h_en: "Branches of Chemistry",
                  h_ar: "فروع علم الكيمياء",
                  p_en: "Organic Chemistry: study of substances containing C–H bonds (medicines, plastics, fuels, detergents, pesticides, dyes). | Inorganic Chemistry: metals, nonmetals and their compounds, acids, bases, salts, oxides (building materials, electronic alloys). | Physical Chemistry: behavior of matter and its changes and energy (battery development, engine cooling). | Analytical Chemistry: analysis of the components of matter and determination of quantity of each component (drinking water quality, air pollution monitoring, commercial fraud detection). | Biochemistry: chemical substances and reactions occurring inside living organisms (digestion, enzymes, blood and toxins analysis).",
                  p_ar: "الكيمياء العضوية: المواد التي تحتوي غالباً على روابط بين الكربون والهيدروجين (الأدوية، البلاستيكات، الوقود، المنظفات، المبيدات الحشرية، الأصباغ). | الكيمياء غير العضوية: الفلزات واللافلزات ومركباتها، الأحماض، القواعد، الأملاح، الأكاسيد (مواد البناء، السبائك الإلكترونية). | الكيمياء الفيزيائية: سلوك المادة وتغيراتها والطاقة المصاحبة لها (تطوير البطاريات، تبريد المحركات). | الكيمياء التحليلية: تحليل مكونات المادة وتحديد كمية كل مكون (فحص جودة مياه الشرب، مراقبة تلوث الهواء، كشف الغش التجاري). | الكيمياء الحيوية: المواد والتفاعلات الكيميائية التي تحدث داخل الكائنات الحية (الهضم، الإنزيمات، تحاليل الدم والسموم)."
                },
                {
                  h_en: "Activity: Foam Experiment",
                  h_ar: "نشاط: تجربة الرغوة",
                  p_en: "Pour 10 mL of hydrogen peroxide (H₂O₂) into a 50 mL graduated cylinder with distilled water. Add 10 mL dish soap and 10 drops food coloring. Stir gently. In a separate cup, prepare a concentrated yeast solution (10 g yeast + 10 mL water). Pour the yeast solution into the cylinder at once. Observe foam formation and gas release — a chemical change visible to the eye. This shows how chemistry studies changes in matter.",
                  p_ar: "اسكب 10mL من فوق أكسيد الهيدروجين (H₂O₂) في مخبار مدرج سعته 50mL مع ماء مقطر. أضف 10mL من سائل غسيل الصحون ثم 10 قطرات من ملون الطعام. حرّك بحركة دائرية. حفّر محلولاً مركزاً من الخميرة (10g خميرة + 10mL ماء). أضف محلول الخميرة دفعة واحدة. راقب تكوّن الرغوة وانطلاق الغاز — تغير كيميائي يمكن ملاحظته بالعين."
                },
                {
                  h_en: "Gold Karats (إضاءات)",
                  h_ar: "عيارات الذهب (إضاءات)",
                  p_en: "Gold purity is measured in karats. 24K gold ≈ 99.9% pure (soft, used for investment). 21K ≈ 87.5%. 18K ≈ 75% (mixed with copper for hardness, used in jewelry). The choice of karat depends on use — investment or ornament.",
                  p_ar: "يُقاس نقاء الذهب بـ «العيار». الذهب عيار 24 هو الأعلى نقاءً بنسبة تقارب 99.9% (لين، للاستثمار). عيار 21 يحتوي على نحو 87.5%. عيار 18 يحتوي على 75% من الذهب، ويُخلط بمعادن أخرى مثل النحاس ليصبح أكثر صلابة ومناسباً للمجوهرات. يعتمد اختيار العيار على الغرض من الاستخدام."
                }
              ],
              questions: [
                { q_en: "Write the scientific term: everything that has mass and occupies a space of void.", q_ar: "اكتب المصطلح العلمي: كل ما له كتلة ويشغل حيزاً من الفراغ.", a_en: "Matter (المادة).", a_ar: "المادة." },
                { q_en: "Write the scientific term: the smallest part of an element that retains the properties of that element.", q_ar: "اكتب المصطلح العلمي: الجزء الأصغر من العنصر ويحتفظ بخواص ذلك العنصر.", a_en: "Atom (الذرة).", a_ar: "الذرة." },
                { q_en: "Complete: …… is one of the branches of chemistry that studies substances containing C–H bonds.", q_ar: "أكمل: تُعتبر …… أحد فروع علم الكيمياء، والتي تهتم بدراسة المواد التي تحتوي غالباً على روابط بين الكربون والهيدروجين.", a_en: "Organic Chemistry (الكيمياء العضوية).", a_ar: "الكيمياء العضوية." },
                { q_en: "Complete: Studying digestion and enzyme action is a use of …… chemistry.", q_ar: "أكمل: دراسة الهضم وعمل الإنزيمات تعتبر من استخدامات فرع الكيمياء ……", a_en: "Biochemistry (الكيمياء الحيوية).", a_ar: "الكيمياء الحيوية." },
                { q_en: "Give a scientific reason: chemistry is described as «the central science».", q_ar: "علل: يوصف علم الكيمياء بـ «العلم المركزي».", a_en: "Because it has a pivotal role in linking branches of natural sciences such as physics, biology, and geology.", a_ar: "لأن له دور محوري في الربط بين فروع العلوم الطبيعية مثل الفيزياء والأحياء والجيولوجيا." },
                { q_en: "A team tested drinking water quality and found dissolved substances. Name the branch of chemistry and explain how it protects human health.", q_ar: "أثناء فحص جودة مياه الشرب، لاحظ فريق أن العينة تحتوي على مواد مذابة. استنتج اسم فرع الكيمياء، وفسّر دوره في حماية صحة الإنسان.", a_en: "Analytical Chemistry. It analyses the components of water and determines the quantity of each, ensuring safety of drinking water and protecting human health from contaminants.", a_ar: "الكيمياء التحليلية. تحلل مكونات المياه وتحدد كمية كل مكون، مما يضمن سلامة مياه الشرب ويحمي صحة الإنسان من الملوثات." }
              ]
            },
            {
              id: "u1c1l2",
              en: "Lesson 2-1: The Evolution of Atomic Models",
              ar: "الدرس (2-1): تطوّر النماذج الذرية",
              sections: [
                {
                  h_en: "Historical Atomic Models",
                  h_ar: "النماذج الذرية التاريخية",
                  p_en: "Scientists (Democritus, Aristotle, Dalton, Thomson, Rutherford, Bohr, Schrödinger) developed the atomic model through history. Dalton: solid sphere. Thomson: plum pudding (positive sphere with embedded electrons). Rutherford: small positive nucleus with electrons around it. Bohr: electrons in fixed energy levels. Quantum Mechanical: electron cloud model.",
                  p_ar: "طوّر العلماء (ديموقريطس، أرسطو، دالتون، طومسون، رذرفورد، بور، شرودنغر) نموذج الذرة عبر التاريخ. دالتون: كرة صلبة. طومسون: نموذج البودنج (كرة موجبة وإلكترونات مغروسة). رذرفورد: نواة موجبة صغيرة وإلكترونات حولها. بور: مستويات طاقة محددة. الميكانيكي الموجي: نموذج السحابة الإلكترونية."
                },
                {
                  h_en: "Rutherford's Experiment (1909)",
                  h_ar: "تجربة رذرفورد (1909)",
                  p_en: "Geiger and Marsden, under Ernest Rutherford, bombarded a thin gold foil with α-particles. Observations: (1) Most α-particles passed straight through → atom is mostly empty. (2) Some deflected → nucleus carries positive charge. (3) Very few rebounded → nucleus is tiny but holds most of the atom's mass.",
                  p_ar: "قام جيجر ومارسدن تحت إشراف إرنست رذرفورد بقذف رقاقة ذهب رقيقة بجسيمات ألفا (α). المشاهدات: (1) نفاذ معظم الجسيمات دون انحراف → الذرة معظمها فراغ. (2) انحراف عدد قليل → النواة موجبة الشحنة. (3) ارتداد عدد قليل جداً → النواة صغيرة الحجم ومركزة الكتلة."
                },
                {
                  h_en: "Objections to Rutherford's Model",
                  h_ar: "الاعتراضات على نموذج رذرفورد",
                  p_en: "Two objections: (1) Electrons carry electric charge, whereas planets are neutral. (2) Physics laws state that an electron moving in a circular orbit continuously loses energy → its speed decreases → centrifugal force weakens → the nucleus pulls it into a spiral → the atom collapses. But atoms do NOT collapse.",
                  p_ar: "اعتراضان: (1) الإلكترونات جسيمات تحمل شحنة كهربائية أما الكواكب فمتعادلة. (2) قوانين الفيزياء توضح أن الإلكترون عند حركته في مدار دائري يفقد طاقة باستمرار → تقل سرعته → تقل قوة الطرد المركزي → تتغلب قوة جذب النواة → مسار حلزوني → تلتصق بالنواة وانهيار الذرة. وهذا لا يحدث."
                },
                {
                  h_en: "Bohr's Model of Hydrogen (1913)",
                  h_ar: "نموذج بور لذرة الهيدروجين (1913)",
                  p_en: "Postulates: (1) Electrons revolve around the nucleus in fixed energy levels without gaining or losing energy (stable energy). These are called principal energy levels. (2) The nucleus at the center is positively charged. (3) Number of negative electrons = number of positive protons (atom is electrically neutral). (4) Each principal level is denoted by integer n; energy increases with distance from nucleus. (5) When an electron absorbs energy, it jumps to a higher level (excited state), then returns to ground state by emitting the absorbed energy.",
                  p_ar: "الفروض: (1) تدور الإلكترونات حول النواة في مستويات طاقة معينة دون أن تكتسب أو تنطلق منها طاقة (طاقة ثابتة)، تسمى مستويات الطاقة الرئيسية. (2) في مركز الذرة نواة موجبة الشحنة. (3) عدد الإلكترونات يساوي عدد البروتونات (الذرة متعادلة كهربائياً). (4) كل مستوى رئيسي يعبر عنه بعدد صحيح n، وتزداد طاقة المستوى بزيادة بعده عن النواة. (5) إذا اكتسب الإلكترون طاقة انتقل إلى المستوى الأعلى (حالة مثارة)، ثم يعود للمستوى المستقر منطلقاً الطاقة."
                },
                {
                  h_en: "Ground State vs Excited State",
                  h_ar: "الذرة المستقرة والذرة المثارة",
                  p_en: "Ground state: when electron energies are at their minimum, arranged in the most stable configuration. Excited state: when the atom absorbs a specific amount of energy, causing one or more electrons to move from a lower energy level to a higher one.",
                  p_ar: "الذرة المستقرة: عندما تكون طاقة إلكتروناتها أقل ما يمكن، بحيث ترتب إلكتروناتها في مستويات الطاقة وفق الترتيب الأكثر استقراراً. الذرة المثارة: التي اكتسبت كمية معينة من الطاقة مما أدى إلى انتقال إلكترون أو أكثر من مستوى طاقة أقل إلى مستوى طاقة أعلى."
                },
                {
                  h_en: "Objections to Bohr's Model",
                  h_ar: "الاعتراضات على نموذج بور",
                  p_en: "Bohr's model succeeded for the hydrogen atom (the simplest) but failed to explain phenomena such as atomic emission spectra of atoms with more electrons.",
                  p_ar: "طُبّق نموذج بور على ذرة الهيدروجين (أبسط الذرات)، إلا أنه فشل في تفسير بعض الظواهر مثل طيف الانبعاث الذري للذرات التي تحتوي على عدد أكبر من الإلكترونات."
                },
                {
                  h_en: "Quantum Mechanical Model",
                  h_ar: "النموذج الميكانيكي الموجي",
                  p_en: "Based on ideas of Planck, Einstein, de Broglie, and Heisenberg, the Austrian physicist Schrödinger founded the mechanical theory of the atom. He put the wave equation that applies to electron motion in the atom, which determines: (a) the maximum capacity of electrons in each principal level, and (b) regions of space around the nucleus where electron presence probability increases. Two new concepts: electron cloud (regions of space around nucleus where electron might exist in all directions) and atomic orbitals (regions inside the electron cloud where electron presence is more probable).",
                  p_ar: "بناءً على أفكار بلانك وأينشتاين ودي برويل وهازينبرج، أسهم العالم النمساوي شرودنغر في تأسيس النظرية الميكانيكية للذرة. وضع المعادلة الموجية التي تطبق على حركة الإلكترون، والتي تحدد: (أ) السعة القصوى للإلكترونات في كل مستوى رئيسي، (ب) مناطق الفراغ حول النواة التي يزداد فيها احتمال تواجد الإلكترونات. مفهومان جديدان: السحابة الإلكترونية (مناطق الفراغ حول النواة التي يحتمل وجود الإلكترون فيها في كل الاتجاهات)، والأفلاك الذرية (مناطق داخل السحابة يزداد احتمال وجود الإلكترون فيها)."
                },
                {
                  h_en: "Quarks (إضاءات)",
                  h_ar: "الكواركات (إضاءات)",
                  p_en: "In 1968, experiments using particle accelerators proved that protons and neutrons are not elementary — they are made of smaller particles called quarks. A proton is made of 3 quarks; a neutron is also made of 3 quarks in a different arrangement.",
                  p_ar: "في عام 1968، أثبتت التجارب باستخدام مسرعات الجسيمات أن البروتونات والنيوترونات ليست جسيمات أولية، بل تتكون من جسيمات أصغر تسمى الكواركات. البروتون: 3 كواركات. النيوترون: 3 كواركات بترتيب مختلف."
                }
              ],
              questions: [
                { q_en: "Write the scientific term: the atom that absorbed a specific amount of energy, causing one or more electrons to move to a higher level.", q_ar: "اكتب المصطلح: الذرة التي امتصت كمية معينة من الطاقة مما أدى إلى انتقال إلكترون أو أكثر لمستوى أعلى.", a_en: "Excited atom (الذرة المثارة).", a_ar: "الذرة المثارة." },
                { q_en: "Write the scientific term: the atom whose electrons are at their minimum energy.", q_ar: "اكتب المصطلح: الذرة عندما تكون طاقة إلكتروناتها أقل ما يمكن.", a_en: "Ground-state atom (الذرة المستقرة).", a_ar: "الذرة المستقرة." },
                { q_en: "Complete: When α-particles are fired at gold foil, most of them ……", q_ar: "أكمل: عند تسليط جسيمات ألفا على رقاقة الذهب فإن معظمها ……", a_en: "Pass through without deviation.", a_ar: "تنفذ دون انحراف." },
                { q_en: "Complete: One objection to Rutherford's model was that an electron, while revolving around the nucleus, …… energy.", q_ar: "أكمل: من الاعتراضات على نموذج رذرفورد أن الإلكترون أثناء دورانه حول النواة …… طاقة.", a_en: "Loses (يفقد).", a_ar: "يفقد." },
                { q_en: "Give a scientific reason: a very small number of α-particles rebound back toward the source.", q_ar: "علل: ارتداد عدد قليل جداً من جسيمات ألفا في اتجاه مصدرها بعد اصطدامها برقاقة الذهب.", a_en: "Because they collided directly with the small, dense, positively-charged nucleus that holds most of the atom's mass.", a_ar: "لأنها اصطدمت مباشرة بالنواة الصغيرة الحجم، الموجبة الشحنة، التي تتركز فيها معظم كتلة الذرة." },
                { q_en: "Give a scientific reason: the atom is electrically neutral.", q_ar: "علل: الذرة متعادلة كهربائياً.", a_en: "Because the number of negative electrons equals the number of positive protons.", a_ar: "لأن عدد الإلكترونات السالبة يساوي عدد البروتونات الموجبة." },
                { q_en: "Per Rutherford, electrons move in circular paths but the atom does not collapse. Rephrase this correctly according to Bohr's model.", q_ar: "وفق نموذج رذرفورد، تتحرك الإلكترونات في مسارات دائرية، ومع ذلك لم تنهار الذرة. أعد صياغة هذه العبارة وفق نموذج بور.", a_en: "Per Bohr, electrons revolve in fixed principal energy levels without gaining or losing energy. Since each level has a stable energy, the electron does not spiral into the nucleus, and the atom stays stable.", a_ar: "وفق بور، تدور الإلكترونات في مستويات طاقة رئيسية محددة دون أن تكتسب أو تنطلق منها طاقة. وبما أن لكل مستوى طاقة ثابتة، لا يتحرك الإلكترون في مسار حلزوني، وتبقى الذرة مستقرة." }
              ]
            },
            {
              id: "u1c1l3",
              en: "Lesson 3-1: Quantum Numbers",
              ar: "الدرس (3-1): أعداد الكم",
              sections: [
                {
                  h_en: "The Four Quantum Numbers",
                  h_ar: "أعداد الكم الأربعة",
                  p_en: "The state of an electron inside the atom is fully described by four quantum numbers: n (principal), l (azimuthal), mℓ (magnetic), ms (spin).",
                  p_ar: "حالة الإلكترون داخل الذرة توصف بأربعة أعداد كم: n (الرئيسي)، l (الزاوي)، mℓ (المغناطيسي)، ms (المغزلي)."
                },
                {
                  h_en: "1. Principal Quantum Number (n)",
                  h_ar: "1. عدد الكم الرئيسي (n)",
                  p_en: "Describes the energy of the principal level and its distance from the nucleus. Integer values 1, 2, 3, …, ∞. Level symbols: K, L, M, N, O, P, Q (for n = 1–7). As n increases, the size of the level increases and electron energy increases.",
                  p_ar: "يصف طاقة المستوى الرئيسي ويحدد بعده عن النواة. قيم صحيحة: 1, 2, 3, … رموز المستويات: K, L, M, N, O, P, Q (لـ n = 1–7). كلما زادت قيمة n زاد حجم المستوى وزادت طاقة الإلكترون فيه."
                },
                {
                  h_en: "2. Azimuthal Quantum Number (l)",
                  h_ar: "2. عدد الكم الزاوي (l)",
                  p_en: "Determines the sublevel inside the principal level, and the shape of the atomic orbital occupied by the electron. Integer values from 0 to (n−1). Symbols: s (l=0), p (l=1), d (l=2), f (l=3). Each principal level n contains n sublevels.",
                  p_ar: "يحدد تحت مستوى الطاقة داخل المستوى الرئيسي، ويحدد شكل الفلك الذري. قيم صحيحة من 0 إلى (n−1). الرموز: s (l=0)، p (l=1)، d (l=2)، f (l=3). كل مستوى رئيسي n يحتوي على عدد من تحت المستويات يساوي رقمه."
                },
                {
                  h_en: "3. Magnetic Quantum Number (mℓ)",
                  h_ar: "3. عدد الكم المغناطيسي (mℓ)",
                  p_en: "Determines the orientation of the orbital in space inside the sublevel. Integer values from −l to +l (including 0). Each orbital holds a maximum of 2 electrons. Number of orbitals: s=1, p=3, d=5, f=7. Max electrons in principal level = 2n².",
                  p_ar: "يحدد اتجاه الفلك الذري في الفراغ داخل تحت المستوى. قيم صحيحة من −l إلى +l مروراً بالصفر. كل فلك يمتلئ بإلكترونين كحد أقصى. عدد الأفلاك: s=1، p=3، d=5، f=7. أقصى عدد إلكترونات في المستوى الرئيسي = 2n²."
                },
                {
                  h_en: "4. Spin Quantum Number (ms)",
                  h_ar: "4. عدد الكم المغزلي (ms)",
                  p_en: "Describes the direction of electron spin about its own axis inside the orbital. Only two values: +½ or −½. Two electrons in the same orbital have opposite spins, creating two opposite magnetic fields that reduce repulsion and allow them to pair.",
                  p_ar: "يصف اتجاه دوران الإلكترون حول نفسه داخل الفلك. قيمتان فقط: +½ أو −½. عند وجود إلكترونين في نفس الفلك تكون حركتهما المغزلية متعاكسة، فينشأ مجالان مغناطيسيان متعاكسان يقللان التنافر فيتجاذبان."
                },
                {
                  h_en: "Shapes of Orbitals",
                  h_ar: "أشكال الأفلاك",
                  p_en: "s orbital: spherical, one orbital per sublevel. p orbitals: three dumbbell-shaped orbitals oriented along x, y, z axes (px, py, pz). d orbitals: five orbitals — four clover-shaped, one ring-and-lobe shaped (dxy, dxz, dyz, dx²−y², dz²). f orbitals: seven orbitals with complex multi-lobed shapes.",
                  p_ar: "فلك s: كروي الشكل، فلك واحد. أفلاك p: ثلاثة أفلاك بشكل دمبل على المحاور x, y, z (px, py, pz). أفلاك d: خمسة أفلاك — أربعة بشكل زهرة رباعية البتلات، والخامس فصان وحلقة (dxy, dxz, dyz, dx²−y², dz²). أفلاك f: سبعة أفلاك بأشكال معقدة متعددة الفصوص."
                }
              ],
              questions: [
                { q_en: "Write the scientific term: a number that describes the energy of the principal level and determines its distance from the nucleus.", q_ar: "اكتب المصطلح: عدد يصف طاقة المستوى الرئيسي ويحدد بعده عن النواة.", a_en: "Principal quantum number (n) — عدد الكم الرئيسي.", a_ar: "عدد الكم الرئيسي (n)." },
                { q_en: "Write the scientific term: a number that determines the sublevel inside the principal level and the shape of the atomic orbital.", q_ar: "اكتب المصطلح: عدد يحدد تحت مستوى الطاقة داخل المستوى الرئيسي، كما يحدد شكل الفلك الذري.", a_en: "Azimuthal quantum number (l) — عدد الكم الزاوي.", a_ar: "عدد الكم الزاوي (l)." },
                { q_en: "For n = 4, determine: (1) number of sublevels, (2) number of orbitals, (3) maximum electrons, (4) possible l values.", q_ar: "إذا كانت n = 4: (1) عدد تحت المستويات، (2) عدد الأفلاك، (3) أقصى عدد إلكترونات، (4) قيم عدد الكم الزاوي المحتملة.", a_en: "(1) 4 sublevels. (2) 16 orbitals (n² = 4² = 16). (3) 32 electrons (2n² = 2×16). (4) l = 0, 1, 2, 3.", a_ar: "(1) 4 تحت مستويات. (2) 16 فلكاً (n² = 4² = 16). (3) 32 إلكتروناً (2n² = 2×16). (4) l = 0, 1, 2, 3." },
                { q_en: "An electron in an orbital has ms = +½. If a second electron is added to the same orbital, what is its ms value? Explain.", q_ar: "فلك واحد فيه إلكترون له ms = +½. إذا أردنا إضافة إلكترون ثانٍ لنفس الفلك، ما قيمة ms له؟ فسّر.", a_en: "ms = −½. Because Pauli's exclusion principle: no two electrons in the same atom can have the same set of four quantum numbers. Two electrons in the same orbital must have opposite spins.", a_ar: "ms = −½. لأن مبدأ الاستبعاد لباولي ينص على أنه لا يوجد إلكترونان لهما نفس قيم أعداد الكم الأربعة. لذلك يجب أن يكون الغزل معاكساً." },
                { q_en: "Calculate the number of orbitals in the second principal energy level (n=2) and list the sublevel symbols.", q_ar: "احسب عدد الأفلاك في مستوى الطاقة الرئيسي الثاني (n=2) واذكر رموز تحت مستويات الطاقة.", a_en: "Number of orbitals = n² = 4. Sublevels: 2s, 2p.", a_ar: "عدد الأفلاك = n² = 4. تحت المستويات: 2s, 2p." },
                { q_en: "Calculate the number of orbitals in the M principal level and list the sublevel symbols.", q_ar: "احسب عدد الأفلاك في مستوى الطاقة الرئيسي M واذكر رموز تحت مستويات الطاقة.", a_en: "n = 3, orbitals = 9. Sublevels: 3s, 3p, 3d.", a_ar: "n = 3، عدد الأفلاك = 9. تحت المستويات: 3s, 3p, 3d." },
                { q_en: "Possible l values in the M principal level.", q_ar: "قيم عدد الكم الزاوي المحتملة في مستوى الطاقة الرئيسي M.", a_en: "l = 0, 1, 2.", a_ar: "l = 0, 1, 2." },
                { q_en: "If n=2 and l=0, this refers to which sublevel?", q_ar: "إذا كانت n=2 و l=0 فإن هذا يعني تحت مستوى الطاقة ……", a_en: "2s.", a_ar: "2s." },
                { q_en: "In sublevel 3p, n = …… and l = ……", q_ar: "في تحت مستوى الطاقة 3p تكون قيمة n = …… و l = ……", a_en: "n = 3, l = 1.", a_ar: "n = 3، l = 1." }
              ]
            },
            {
              id: "u1c1l4",
              en: "Lesson 4-1: Electron Configuration Rules in Atoms",
              ar: "الدرس (4-1): قواعد الترتيب الإلكتروني في الذرات",
              sections: [
                {
                  h_en: "Aufbau Principle (مبدأ أوفياو)",
                  h_ar: "مبدأ أوفياو (البناء التصاعدي)",
                  p_en: "Electrons fill principal energy levels of lower energy first. The 1st principal level (n=1) fills first, then n=2, then n=3, etc. Aufbau is German for «building up».",
                  p_ar: "مستويات الطاقة الرئيسية ذات الطاقة المنخفضة تمتلئ بالإلكترونات أولاً. فالمستوى الأول n=1 يمتلئ أولاً (الأقل طاقة والأقرب للنواة)، ثم n=2 ثم n=3 وهكذا."
                },
                {
                  h_en: "Madelung's Rule (قاعدة مادلنج)",
                  h_ar: "قاعدة مادلنج",
                  p_en: "The sublevel with the lower sum (n + l) fills first. If two sublevels have the same (n + l) sum, the one with lower n fills first. Order: 1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p → 6s → 4f → 5d → 6p → 7s → 5f → 6d → 7p. Example: 4s (n+l=4) fills before 3d (n+l=5). And 3p (n+l=4) fills before 4s (n+l=4) because n=3 < n=4.",
                  p_ar: "تحت مستوى الطاقة الذي يكون مجموع قيمة عددي الكم الرئيسي والزاوي (n + l) له أقل يمأل بالإلكترونات أولاً، فإذا تساوى تحت مستويين في مجموع (n + l) فتحت مستوى الطاقة الذي له أقل قيمة عدد كم رئيسي (n) يمأل أولاً. الترتيب: 1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p → 6s → 4f → 5d → 6p → 7s → 5f → 6d → 7p. مثال: 4s (n+l=4) قبل 3d (n+l=5). و 3p (n+l=4) قبل 4s (n+l=4) لأن n=3 < n=4."
                },
                {
                  h_en: "Hund's Rule (قاعدة هوند)",
                  h_ar: "قاعدة هوند",
                  p_en: "In a sublevel with multiple orbitals, pairing does not occur until each orbital is singly occupied with parallel spins first, then electrons begin to pair in opposite spins. Example: nitrogen (7N): 1s² 2s² 2p³ — the three 2p orbitals each hold one electron before pairing.",
                  p_ar: "لا يحدث تزاوج بين إلكترونين في فلك تحت مستوى طاقة معين يتكون من عدة أفلاك إلا بعد أن تُشغل أفلاكه فرادى أولاً، ثم تبدأ الإلكترونات بالازدواج في الأفلاك تباعاً باتجاه غزل معاكس. مثال: النيتروجين (7N): 1s² 2s² 2p³ — كل فلك من 2p يحتوي إلكتروناً واحداً قبل الازدواج."
                },
                {
                  h_en: "Pauli's Exclusion Principle (مبدأ الاستبعاد لباولي)",
                  h_ar: "مبدأ الاستبعاد لباولي",
                  p_en: "In a given atom, no two electrons have the same set of four quantum numbers. Example: in 1s², both electrons have n=1, l=0, mℓ=0 but differ in ms (+½ and −½). In 2p², the two electrons can agree in n, l, ms but differ in mℓ.",
                  p_ar: "في ذرة ما لا يوجد إلكترونان لهما قيم أعداد الكم الأربعة نفسها. مثال: في 1s² يتفق الإلكترونان في n=1, l=0, mℓ=0 ويختلفان في ms (+½, −½). وفي 2p² يمكن أن يتفقا في n, l, ms ويختلفان في mℓ."
                },
                {
                  h_en: "Noble Gas Shorthand",
                  h_ar: "الترتيب حسب أقرب غاز نبيل",
                  p_en: "Write the nearest preceding noble gas in square brackets, then complete the remaining configuration. Example: 11Na: [Ne] 3s¹. 20Ca: [Ar] 4s².",
                  p_ar: "يُكتب بين قوسين مربعين رمز الغاز النبيل الذي يسبق العنصر مباشرةً، ثم يُستكمل ترتيب الإلكترونات المتبقية. مثال: 11Na: [Ne] 3s¹. 20Ca: [Ar] 4s²."
                },
                {
                  h_en: "Exceptions: Cr and Cu",
                  h_ar: "استثناءات: الكروم والنحاس",
                  p_en: "24Cr actual: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d⁵ — an electron moves from 4s to 3d to make d half-filled (more stable than 3d⁴). 29Cu actual: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d¹⁰ — an electron moves from 4s to 3d to make d fully filled (more stable than 3d⁹).",
                  p_ar: "24Cr الفعلي: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d⁵ — ينتقل إلكترون من 4s إلى 3d ليصبح d نصف ممتلئ (أكثر استقراراً من 3d⁴). 29Cu الفعلي: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d¹⁰ — ينتقل إلكترون من 4s إلى 3d ليصبح d ممتلئاً تماماً (أكثر استقراراً من 3d⁹)."
                }
              ],
              questions: [
                { q_en: "Write the scientific term: lower-energy principal levels are filled with electrons first.", q_ar: "اكتب المصطلح: مستويات الطاقة الرئيسية ذات الطاقة المنخفضة تمتلئ بالإلكترونات أولاً.", a_en: "Aufbau Principle — مبدأ أوفياو.", a_ar: "مبدأ أوفياو (البناء التصاعدي)." },
                { q_en: "Write the scientific term: no pairing between two electrons in a sublevel composed of multiple orbitals until each is singly occupied first, then pairing proceeds with opposite spins.", q_ar: "اكتب المصطلح: لا يحدث تزاوج بين إلكترونين في فلك تحت مستوى طاقة معين يتكون من عدة أفلاك إلا بعد أن تُشغل أفلاكه فرادى، ثم تبدأ الإلكترونات بالازدواج باتجاه غزل معاكس.", a_en: "Hund's Rule — قاعدة هوند.", a_ar: "قاعدة هوند." },
                { q_en: "Write the scientific term: in a given atom, no two electrons have the same four quantum numbers.", q_ar: "اكتب المصطلح: في ذرة ما لا يوجد إلكترونان لهما قيم أعداد الكم الأربعة نفسها.", a_en: "Pauli's Exclusion Principle — مبدأ الاستبعاد لباولي.", a_ar: "مبدأ الاستبعاد لباولي." },
                { q_en: "Write the electron configuration of 11Na.", q_ar: "اكتب الترتيب الإلكتروني للصوديوم 11Na.", a_en: "1s² 2s² 2p⁶ 3s¹ (or [Ne] 3s¹).", a_ar: "1s² 2s² 2p⁶ 3s¹ (أو [Ne] 3s¹)." },
                { q_en: "Write the electron configuration of 21Sc.", q_ar: "اكتب الترتيب الإلكتروني للسكانديوم 21Sc.", a_en: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹ (or [Ar] 4s² 3d¹).", a_ar: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹ (أو [Ar] 4s² 3d¹)." },
                { q_en: "Write the electron configuration of 36Kr.", q_ar: "اكتب الترتيب الإلكتروني للكريبتون 36Kr.", a_en: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ (or [Ar] 4s² 3d¹⁰ 4p⁶).", a_ar: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ (أو [Ar] 4s² 3d¹⁰ 4p⁶)." },
                { q_en: "Write the electron configuration of 12Mg, 19K, 26Fe, 35Br.", q_ar: "اكتب الترتيب الإلكتروني لـ 12Mg, 19K, 26Fe, 35Br.", a_en: "12Mg: 1s² 2s² 2p⁶ 3s². 19K: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹. 26Fe: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶. 35Br: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁵.", a_ar: "12Mg: 1s² 2s² 2p⁶ 3s². 19K: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹. 26Fe: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶. 35Br: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁵." },
                { q_en: "Which configuration is correct for oxygen (8O)? A: 1s² 2s² 2px² 2py¹ 2pz¹ or B: 1s² 2s² 2px² 2py² 2pz⁰.", q_ar: "أي الترتيبين يمثل الترتيب الإلكتروني الصحيح للأكسجين (8O)?", a_en: "B. Because electrons fill orbitals singly first (Hund's rule).", a_ar: "B. لأن الإلكترونات تشغل الأفلاك فرادى أولاً (قاعدة هوند)." },
                { q_en: "For Al (13Al), write: (1) sublevel configuration, (2) orbital configuration, (3) unpaired electrons, (4) paired electrons, (5) pairs count.", q_ar: "في ذرة الألومنيوم (13Al): (1) الترتيب حسب تحت المستويات، (2) الترتيب حسب الأفلاك، (3) عدد الإلكترونات المفردة، (4) عدد الإلكترونات المزدوجة، (5) عدد أزواج الإلكترونات.", a_en: "(1) 1s² 2s² 2p⁶ 3s² 3p¹. (2) Each s has 1 orbital with paired arrow, each p has 3 orbitals with one unpaired electron in 3p. (3) 1. (4) 12. (5) 6 pairs.", a_ar: "(1) 1s² 2s² 2p⁶ 3s² 3p¹. (2) كل s فلك واحد بإلكترونين متعاكسين، كل p ثلاثة أفلاك بإلكترون واحد في 3p. (3) 1. (4) 12. (5) 6 أزواج." }
              ]
            },
            {
              id: "u1c1l5",
              en: "Lesson 5-1: Applications on Electronic Configuration Rules",
              ar: "الدرس (5-1): تطبيقات على قواعد الترتيب الإلكتروني",
              sections: [
                {
                  h_en: "Determining Atomic Number from Configuration",
                  h_ar: "تحديد العدد الذري من الترتيب الإلكتروني",
                  p_en: "Sum the number of electrons in all sublevels to get the atomic number. Example: 1s² 2s² 2p³ → 2 + 2 + 3 = 7 → nitrogen (N).",
                  p_ar: "يُجمع عدد الإلكترونات في كل تحت مستوى طاقة. مثال: 1s² 2s² 2p³ → 2+2+3 = 7 → النيتروجين (N)."
                },
                {
                  h_en: "Orbital Diagrams",
                  h_ar: "المخططات الفلكية",
                  p_en: "After writing the sublevel configuration, draw the orbitals (boxes) and place electrons according to the rules — up arrows and down arrows for opposite spins. Electrons fill singly before pairing (Hund).",
                  p_ar: "بعد كتابة الترتيب حسب تحت المستويات، تُرسم الأفلاك (مربعات) وتُرتب فيها الإلكترونات حسب القواعد — أسهم لأعلى وأسفل للغزل المتعاكس. تملأ فرادى قبل الازدواج (هوند)."
                },
                {
                  h_en: "Worked Examples",
                  h_ar: "أمثلة محلولة",
                  p_en: "3Li: 1s² 2s¹. 23V: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d³. 17Cl: 1s² 2s² 2p⁶ 3s² 3p⁵. 30Zn: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰. 20Ca: [Ar] 4s². 4Be: [He] 2s². 15P: [Ne] 3s² 3p³.",
                  p_ar: "3Li: 1s² 2s¹. 23V: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d³. 17Cl: 1s² 2s² 2p⁶ 3s² 3p⁵. 30Zn: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰. 20Ca: [Ar] 4s². 4Be: [He] 2s². 15P: [Ne] 3s² 3p³."
                }
              ],
              questions: [
                { q_en: "The electron configuration ends with 3d¹. What is the atomic number?", q_ar: "عنصر ينتهي ترتيبه الإلكتروني بـ 3d¹. ما هو عدده الذري؟", a_en: "21 (Scandium). 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹ = 2+2+6+2+6+2+1 = 21.", a_ar: "21 (سكانديوم). 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹ = 2+2+6+2+6+2+1 = 21." },
                { q_en: "Name the element ending in 3p⁴.", q_ar: "اسم العنصر الذي ينتهي ترتيبه الإلكتروني بـ 3p⁴.", a_en: "Sulfur (16S).", a_ar: "الكبريت (16S)." },
                { q_en: "Write the electron configuration of 17Cl and 30Zn.", q_ar: "اكتب الترتيب الإلكتروني لـ 17Cl و 30Zn.", a_en: "17Cl: 1s² 2s² 2p⁶ 3s² 3p⁵. 30Zn: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰.", a_ar: "17Cl: 1s² 2s² 2p⁶ 3s² 3p⁵. 30Zn: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰." },
                { q_en: "Write the orbital configuration for boron (5B) and chlorine (17Cl).", q_ar: "الترتيب الإلكتروني حسب الأفلاك للبورون (5B) والكلور (17Cl).", a_en: "5B: 1s² 2s² 2p¹ (one unpaired in 2p). 17Cl: 1s² 2s² 2p⁶ 3s² 3p⁵ (one unpaired in 3p).", a_ar: "5B: 1s² 2s² 2p¹. 17Cl: 1s² 2s² 2p⁶ 3s² 3p⁵." },
                { q_en: "Which configuration is correct for titanium 22Ti: A) [Ar] 4s¹ 3d⁵ or B) [Ar] 4s² 3d⁴?", q_ar: "أي الترتيبين صحيح للتيتانيوم 22Ti: A) [Ar] 4s¹ 3d⁵ أو B) [Ar] 4s² 3d⁴؟", a_en: "A is correct. According to Madelung's rule, 4s fills before 3d, and the correct configuration is [Ar] 4s² 3d². Student wrote 3d⁴ which violates Aufbau. The correct 22Ti is [Ar] 4s² 3d².", a_ar: "الترتيب الصحيح لـ 22Ti هو [Ar] 4s² 3d². الترتيب المكتوب 3d⁴ يخالف مبدأ أوفياو وقاعدة مادلنج." }
              ]
            }
          ]
        },
        {
          id: "u1c2",
          en: "Chapter 2: Periodicity of Elements",
          ar: "الفصل الثاني: دورية العناصر",
          lessons: [
            {
              id: "u1c2l1",
              en: "Lesson 1-2: Development of the Periodic Table",
              ar: "الدرس (1-2): تطوّر الجدول الدوري",
              sections: [
                {
                  h_en: "Historical Attempts",
                  h_ar: "المحاولات التاريخية",
                  p_en: "Dobereiner (German): triads. Newlands (English): law of octaves. Meyer (German): atomic volumes. Mendeleev (Russian): arranged elements in horizontal rows by increasing atomic mass — properties repeated, vertical columns formed with similar properties. Left gaps for undiscovered elements.",
                  p_ar: "دو براينر (ألماني): ثلاثيات. نيوالندز (إنجليزي): قانون الثمانيات. ماير (ألماني): الحجوم الذرية. مندليف (روسي): رتب العناصر في صفوف أفقية بحسب تزايد الكتل الذرية — فتكررت خواصها وتكونت أعمدة رأسية تضم عناصر متشابهة، وترك أماكن شاغرة لعناصر تنبأ باكتشافها."
                },
                {
                  h_en: "The Modern Periodic Table",
                  h_ar: "الجدول الدوري الحديث",
                  p_en: "Modified from Mendeleev's. Arranged by atomic number. Periodic Law: «When elements are arranged in ascending order by atomic number, a gradual and periodic variation appears in their physical and chemical properties.» Each element increases by one proton over the preceding.",
                  p_ar: "تمت تعديلات على جدول مندليف وأصبح التصنيف حسب الأعداد الذرية. القانون الدوري: «عند ترتيب العناصر ترتيباً تصاعدياً حسب أعدادها الذرية يظهر تدرج وتكرار دوري في خواصها الفيزيائية والكيميائية». كل عنصر يزيد عن السابق بروتون واحد."
                },
                {
                  h_en: "Groups",
                  h_ar: "المجموعات",
                  p_en: "18 vertical columns. Elements of the same group share chemical properties because they share similar electronic configuration. Group 1 (alkali metals) ends in ns¹. Group 18 (noble gases) ends in ns² np⁶ (except He which is 1s²). Each element in a group adds one principal energy level over the one above it.",
                  p_ar: "18 عموداً رأسياً. تتشابه عناصر المجموعة الواحدة في الخواص الكيميائية بسبب تشابهها بالتركيب الإلكتروني. المجموعة 1 (فلزات الأقالء) ينتهي تركيبها بـ ns¹. المجموعة 18 (الغازات النبيلة) ينتهي تركيبها بـ ns² np⁶ ما عدا الهيليوم. كل عنصر يزيد عن الذي يسبقه بمستوى طاقة رئيسي واحد."
                },
                {
                  h_en: "Periods",
                  h_ar: "الدورات",
                  p_en: "7 horizontal rows. Each period starts with filling a new principal energy level (with an alkali metal) and ends with a noble gas. The number of principal energy levels in a period equals the period number. Two types: short periods (1, 2, 3) and long periods (4, 5, 6, 7). Element counts: 2, 8, 8, 18, 18, 32, 32.",
                  p_ar: "7 صفوف أفقية. تبدأ كل دورة بملء مستوى طاقة رئيسي جديد (بفلز قلوي) وتنتهي بغاز نبيل. عدد مستويات الطاقة الرئيسية في الدورة = رقم الدورة. نوعان: دورات قصيرة (1, 2, 3) وطويلة (4, 5, 6, 7). عدد العناصر: 2, 8, 8, 18, 18, 32, 32."
                },
                {
                  h_en: "Special Group Names",
                  h_ar: "الأسماء المميزة للمجموعات",
                  p_en: "Group 1: Alkali Metals (فلزات الأقالء). Group 2: Alkaline Earth Metals (فلزات الأقالء الأرضية). Group 17: Halogens (الهالوجينات). Group 18: Noble Gases (الغازات النبيلة).",
                  p_ar: "المجموعة 1: فلزات الأقالء. المجموعة 2: فلزات الأقالء الأرضية. المجموعة 17: الهالوجينات. المجموعة 18: الغازات النبيلة."
                }
              ],
              questions: [
                { q_en: "Write the scientific term: when elements are arranged in ascending order by atomic number, gradual and periodic variation appears in their physical and chemical properties.", q_ar: "اكتب المصطلح: عند ترتيب العناصر تصاعدياً حسب أعدادها الذرية يظهر تدرج وتكرار دوري في خواصها الفيزيائية والكيميائية.", a_en: "The Modern Periodic Law (القانون الدوري الحديث).", a_ar: "القانون الدوري الحديث." },
                { q_en: "Write the scientific term: vertical column of elements in the periodic table.", q_ar: "اكتب المصطلح: العمود الرأسي من العناصر في الجدول الدوري.", a_en: "Group (المجموعة).", a_ar: "المجموعة." },
                { q_en: "What are the distinguished names of groups 1, 2, 17, 18?", q_ar: "ما الأسماء المميزة للمجموعات 1, 2, 17, 18؟", a_en: "1: Alkali metals. 2: Alkaline earth metals. 17: Halogens. 18: Noble gases.", a_ar: "1: فلزات الأقالء. 2: فلزات الأقالء الأرضية. 17: الهالوجينات. 18: الغازات النبيلة." },
                { q_en: "How many groups and periods are in the modern periodic table?", q_ar: "كم عدد المجموعات والدورات في الجدول الدوري الحديث؟", a_en: "18 groups, 7 periods.", a_ar: "18 مجموعة، 7 دورات." },
                { q_en: "Given two hypothetical lists — what is common between M and Z (both listed with the same valence pattern)?", q_ar: "ما المشترك بين العنصرين M و Z؟", a_en: "They are in the same group (both have the same number of valence electrons).", a_ar: "يقعان في المجموعة نفسها (لهما نفس عدد إلكترونات التكافؤ)." },
                { q_en: "Why do chlorine (gas), fluorine (gas), iodine (solid), and bromine (liquid) show similar chemical behavior despite different physical properties?", q_ar: "لماذا تُظهر الكلور والفلور واليود والبروم سلوكاً كيميائياً متشابهاً رغم اختلاف الخواص الفيزيائية؟", a_en: "Because they belong to the same group (halogens, group 17) and share the same valence-shell electron configuration (ns² np⁵). Chemical properties depend on valence electrons, not on physical state.", a_ar: "لأنها تنتمي إلى المجموعة نفسها (الهالوجينات، مجموعة 17) وتتشارك نفس التركيب الإلكتروني لمستوى التكافؤ (ns² np⁵). الخواص الكيميائية تعتمد على إلكترونات التكافؤ لا على الحالة الفيزيائية." }
              ]
            },
            {
              id: "u1c2l2",
              en: "Lesson 2-2: Classification of the Elements",
              ar: "الدرس (2-2): تقسيم العناصر",
              sections: [
                {
                  h_en: "Four Sectors (s, p, d, f)",
                  h_ar: "القطاعات الأربعة (s, p, d, f)",
                  p_en: "The periodic table is divided into four main sectors based on the type of sublevel that the outermost electrons occupy. s-sector: ends in ns¹ or ns² — groups 1, 2 + helium. p-sector: ends in np¹ to np⁶ — groups 13–18 (except He). d-sector: ends in (n−1)d¹ to (n−1)d¹⁰ — groups 3–12 (main transition elements), 10 columns. f-sector: ends in (n−1)f¹ to (n−1)f¹⁴ — lanthanides and actinides (inner transition elements).",
                  p_ar: "يُقسم الجدول الدوري إلى أربعة قطاعات رئيسية بناءً على نوع تحت مستويات الطاقة التي تشغلها إلكترونات المستوى الخارجي. قطاع s: ينتهي بـ ns¹ أو ns² — المجموعات 1, 2 + الهيليوم. قطاع p: ينتهي بـ np¹ إلى np⁶ — المجموعات 13–18 (ما عدا He). قطاع d: ينتهي بـ (n−1)d¹ إلى (n−1)d¹⁰ — المجموعات 3–12 (العناصر الانتقالية الرئيسية)، 10 أعمدة. قطاع f: ينتهي بـ (n−1)f¹ إلى (n−1)f¹⁴ — اللانثانيدات والأكتينيدات (العناصر الانتقالية الداخلية)."
                },
                {
                  h_en: "Lanthanides and Actinides",
                  h_ar: "اللانثانيدات والأكتينيدات",
                  p_en: "Lanthanides: period 6, filling 4f gradually. Named because they follow lanthanum (La) in the table. Actinides: period 7, filling 5f gradually. Named because they follow actinium (89Ac). Both are placed in horizontal strips below the periodic table for space and to preserve organization.",
                  p_ar: "اللانثانيدات: من عناصر الدورة السادسة، يبدأ فيها ملء 4f. سميت لأنها تأتي بعد اللانثانم (La). الأكتينيدات: من عناصر الدورة السابعة، يبدأ فيها ملء 5f. سميت لأنها تأتي بعد الأكتينيوم (89Ac). وُضعت في صف أفقي أسفل الجدول توفيراً للمساحة وحفاظاً على التنظيم."
                },
                {
                  h_en: "Determining Element Position",
                  h_ar: "تحديد موقع العنصر",
                  p_en: "Period = largest n value in the configuration. Group = determined by the ending sublevel: (1) if ends in nsˣ → group = x. (2) if ends in ns² npˣ → group = 12 + x. (3) if ends in (n−1)dˣ nsʸ → group = x + y.",
                  p_ar: "الدورة = أكبر قيمة لعدد الكم الرئيسي n في الترتيب الإلكتروني. المجموعة تُحدد حسب نهاية الترتيب: (1) إذا انتهى بـ nsˣ → المجموعة = x. (2) إذا انتهى بـ ns² npˣ → المجموعة = 12 + x. (3) إذا انتهى بـ (n−1)dˣ nsʸ → المجموعة = x + y."
                }
              ],
              questions: [
                { q_en: "Determine the position of sodium (11Na) whose configuration is [Ne] 3s¹.", q_ar: "حدد موقع الصوديوم (11Na) الذي ترتيبه [Ne] 3s¹.", a_en: "Period 3 (largest n = 3), Group 1 (x = 1).", a_ar: "الدورة الثالثة (n = 3)، المجموعة الأولى (x = 1)." },
                { q_en: "Determine the position of calcium (20Ca) whose configuration is [Ar] 4s².", q_ar: "حدد موقع الكالسيوم (20Ca) الذي ترتيبه [Ar] 4s².", a_en: "Period 4 (n = 4), Group 2 (x = 2).", a_ar: "الدورة الرابعة (n = 4)، المجموعة الثانية (x = 2)." },
                { q_en: "Determine the position of germanium (32Ge) whose configuration is [Ar] 4s² 3d¹⁰ 4p².", q_ar: "حدد موقع الجرمانيوم (32Ge) الذي ترتيبه [Ar] 4s² 3d¹⁰ 4p².", a_en: "Period 4 (n = 4), Group 14 (12 + x = 12 + 2 = 14).", a_ar: "الدورة الرابعة (n = 4)، المجموعة 14 (12 + 2 = 14)." },
                { q_en: "Determine the position of selenium (34Se) whose configuration is [Ar] 4s² 3d¹⁰ 4p⁴.", q_ar: "حدد موقع السيلينيوم (34Se) الذي ترتيبه [Ar] 4s² 3d¹⁰ 4p⁴.", a_en: "Period 4, Group 16 (12 + 4 = 16).", a_ar: "الدورة الرابعة، المجموعة 16 (12 + 4 = 16)." },
                { q_en: "Determine the position of manganese (25Mn) whose configuration is [Ar] 4s² 3d⁵.", q_ar: "حدد موقع المنجنيز (25Mn) الذي ترتيبه [Ar] 4s² 3d⁵.", a_en: "Period 4, Group 7 (x + y = 5 + 2 = 7).", a_ar: "الدورة الرابعة، المجموعة 7 (5 + 2 = 7)." },
                { q_en: "Determine the position of copper (29Cu) whose configuration is [Ar] 4s¹ 3d¹⁰.", q_ar: "حدد موقع النحاس (29Cu) الذي ترتيبه [Ar] 4s¹ 3d¹⁰.", a_en: "Period 4, Group 11 (x + y = 10 + 1 = 11).", a_ar: "الدورة الرابعة، المجموعة 11 (10 + 1 = 11)." },
                { q_en: "Determine the position of bromine (35Br).", q_ar: "حدد موقع البروم (35Br).", a_en: "[Ar] 4s² 3d¹⁰ 4p⁵ → Period 4, Group 17 (12 + 5 = 17).", a_ar: "[Ar] 4s² 3d¹⁰ 4p⁵ → الدورة الرابعة، المجموعة 17 (12 + 5 = 17)." },
                { q_en: "An element ends in 3p⁵. Name it and give its period and group.", q_ar: "عنصر ينتهي ترتيبه الإلكتروني بـ 3p⁵. ما اسمه ورمزه ودورته ومجموعته؟", a_en: "Chlorine, 17Cl. Period 3, Group 17.", a_ar: "الكلور، 17Cl. الدورة الثالثة، المجموعة 17." }
              ]
            },
            {
              id: "u1c2l3",
              en: "Lesson 3-2: Periodic Trends",
              ar: "الدرس (3-2): الميول الدورية (التدرج في الخواص)",
              sections: [
                {
                  h_en: "Atomic Radius",
                  h_ar: "نصف القطر الذري (الحجم الذري)",
                  p_en: "Metallic atomic radius = half the distance between two adjacent nuclei in a metal's crystal lattice. Nonmetallic atomic radius = half the distance between two identical nuclei bonded together. Measured in picometers (pm); 1 pm = 10⁻¹² m. Across a period (left → right): decreases (more protons, same shielding → stronger attraction). Down a group (top → bottom): increases (more energy levels → more shielding → weaker attraction on outer electrons).",
                  p_ar: "نصف القطر الذري الفلزي = نصف المسافة بين نواتي ذرتين متجاورتين في التركيب البلوري. نصف القطر الذري اللافلزي = نصف المسافة بين نواتي ذرتين متماثلتين بينهما رابطة. يُقاس بالبيكومتر (pm)؛ 1 pm = 10⁻¹² m. خلال الدورة (يسار → يمين): يقل (زيادة البروتونات، الحجب ثابت، زيادة الجذب). خلال المجموعة (أعلى → أسفل): يزداد (زيادة المستويات، زيادة الحجب، ضعف الجذب على الإلكترونات الخارجية)."
                },
                {
                  h_en: "Ionization Energy",
                  h_ar: "طاقة التأين",
                  p_en: "Energy required to remove the weakest-bound electron from a neutral atom in the gaseous state. X(g) + energy → X⁺(g) + e⁻. Across a period (left → right): increases (stronger nuclear attraction). Down a group (top → bottom): decreases (more shielding, weaker attraction). Alkali metals have the lowest; noble gases the highest.",
                  p_ar: "الطاقة اللازمة لنزع أضعف إلكترون ارتباطاً بالنواة من ذرة متعادلة في الحالة الغازية. X(g) + طاقة → X⁺(g) + e⁻. خلال الدورة (يسار → يمين): تزداد. خلال المجموعة (أعلى → أسفل): تقل. فلزات الأقالء لها أقل طاقة تأين، والغازات النبيلة الأعلى."
                },
                {
                  h_en: "Electron Affinity",
                  h_ar: "طاقة الميل الإلكتروني",
                  p_en: "Energy released or absorbed when a neutral atom in the gaseous state gains one or more electrons. X(g) + e⁻ → X⁻(g) + energy. Across a period (left → right): increases. Down a group (top → bottom): decreases. Alkali metals have the lowest; halogens the highest. Chlorine (17Cl) has the highest electron affinity in the periodic table (higher than fluorine, due to F's small size causing strong repulsion with the incoming electron).",
                  p_ar: "الطاقة المنطلقة أو الممتصة من الذرة وهي في الحالة الغازية عندما تكتسب إلكتروناً أو أكثر. X(g) + e⁻ → X⁻(g) + طاقة. خلال الدورة: تزداد. خلال المجموعة: تقل. فلزات الأقالء لها أقل قيمة، والهالوجينات الأعلى. الكلور (17Cl) له أعلى قيمة في الجدول الدوري (أعلى من الفلور بسبب صغر حجم ذرة الفلور مما يسبب تنافراً مع الإلكترون المضاف)."
                },
                {
                  h_en: "Electronegativity",
                  h_ar: "السالبية الكهربائية",
                  p_en: "Measure of an atom's ability to attract electrons toward itself from another atom bonded to it. Measured by the Pauling scale. Across a period (left → right): increases. Down a group (top → bottom): decreases. Fluorine (9F) is the highest; Francium (87Fr) is the lowest. Noble gases have no electronegativity values (stable, rarely bond).",
                  p_ar: "مقياس قدرة الذرة على جذب الإلكترونات نحوها من ذرة أخرى مرتبطة معها برابطة كيميائية. يُقاس بمقياس بولنج. خلال الدورة: تزداد. خلال المجموعة: تقل. الفلور (9F) الأعلى، والفرانسيوم (87Fr) الأقل. الغازات النبيلة ليس لها قيم سالبية كهربائية (لأنها مستقرة وغالباً لا تكون روابط)."
                },
                {
                  h_en: "Summary of Trends",
                  h_ar: "ملخص التدرجات",
                  p_en: "Down a group: atomic radius ↑, ionization energy ↓, electron affinity ↓, electronegativity ↓. Across a period (left to right): atomic radius ↓, ionization energy ↑, electron affinity ↑, electronegativity ↑.",
                  p_ar: "خلال المجموعة من أعلى لأسفل: نصف القطر يزداد، طاقة التأين تقل، الميل الإلكتروني يقل، السالبية الكهربائية تقل. خلال الدورة من يسار لليمين: نصف القطر يقل، طاقة التأين تزداد، الميل الإلكتروني يزداد، السالبية الكهربائية تزداد."
                }
              ],
              questions: [
                { q_en: "Write the scientific term: half the distance between two identical nuclei bonded together.", q_ar: "اكتب المصطلح: نصف المسافة بين نواتي ذرتين متماثلتين بينهما رابطة كيميائية.", a_en: "Atomic radius (نصف القطر الذري).", a_ar: "نصف القطر الذري." },
                { q_en: "Write the scientific term: energy required to remove the weakest-bound electron from a neutral atom in the gaseous state.", q_ar: "اكتب المصطلح: مقدار الطاقة اللازمة لنزع أضعف إلكترون ارتباطاً بالنواة من ذرة متعادلة في الحالة الغازية.", a_en: "First ionization energy (طاقة التأين الأولى).", a_ar: "طاقة التأين الأولى." },
                { q_en: "Write the scientific term: measure of the ability of an atom to attract electrons toward itself from another atom bonded to it.", q_ar: "اكتب المصطلح: مقياس قدرة الذرة على جذب الإلكترونات نحوها من ذرة أخرى مرتبطة معها برابطة كيميائية.", a_en: "Electronegativity (السالبية الكهربائية).", a_ar: "السالبية الكهربائية." },
                { q_en: "Given Li (152 pm), Na (186 pm), K (227 pm), explain the trend.", q_ar: "بالاستعانة بالأشكال: Li (152 pm), Na (186 pm), K (227 pm). ماذا تستنتج؟", a_en: "Atomic radius increases down the group from top to bottom because the number of principal energy levels increases, increasing shielding and decreasing the nucleus's pull on outer electrons.", a_ar: "يزداد نصف القطر الذري خلال المجموعة من أعلى لأسفل بزيادة عدد مستويات الطاقة الرئيسية، فيزداد تأثير الحجب وتقل قوة جذب النواة للإلكترونات الخارجية." },
                { q_en: "If the distance between the two Br nuclei in Br₂ is 228 pm, what is the atomic radius?", q_ar: "إذا كانت المسافة بين نواتي ذرتي البروم في جزيء Br₂ هي 228pm فما قيمة نصف القطر الذري؟", a_en: "228 / 2 = 114 pm.", a_ar: "228 / 2 = 114 pm." },
                { q_en: "If the distance between the two Cl nuclei in Cl₂ is 198 pm, what is the atomic radius?", q_ar: "إذا كانت المسافة بين نواتي ذرتي الكلور في جزيء Cl₂ هي 198pm فما قيمة نصف القطر الذري؟", a_en: "198 / 2 = 99 pm.", a_ar: "198 / 2 = 99 pm." },
                { q_en: "Why is fluorine's electron affinity lower than chlorine's?", q_ar: "علل: الميل الإلكتروني للفلور أقل من الميل الإلكتروني للكلور.", a_en: "Because the small size of the fluorine atom makes the added electron strongly repel the 9 original electrons, decreasing stability and lowering electron affinity. Chlorine is larger, so repulsion is less.", a_ar: "بسبب صغر حجم ذرة الفلور فإن الإلكترون المضاف يتنافر بشدة مع الإلكترونات التسعة الأصلية مما يقلل من استقرار الذرة فتقل طاقة الميل الإلكتروني، بينما ذرة الكلور أكبر حجماً لذلك يكون التنافر أقل." },
                { q_en: "Why do noble gases have no electronegativity values?", q_ar: "علل: الغازات النبيلة ليس لها قيم سالبية كهربائية.", a_en: "Because noble gases are stable and rarely form chemical bonds (their outer levels are complete).", a_ar: "لأن الغازات النبيلة مستقرة وغالباً لا تكون روابط كيميائية (مستوياتها الخارجية مكتملة)." },
                { q_en: "Which has the highest electronegativity in the periodic table?", q_ar: "أعلى عناصر الجدول الدوري في السالبية الكهربائية.", a_en: "Fluorine (9F).", a_ar: "الفلور (9F)." },
                { q_en: "Which has the lowest electronegativity?", q_ar: "أقل عناصر الجدول الدوري في السالبية الكهربائية.", a_en: "Francium (87Fr).", a_ar: "الفرانسيوم (87Fr)." },
                { q_en: "Down a group, what happens to atomic radius, ionization energy, electron affinity, electronegativity?", q_ar: "خلال المجموعة من أعلى إلى أسفل، ما تدرج: نصف القطر، طاقة التأين، الميل الإلكتروني، السالبية الكهربائية؟", a_en: "Atomic radius ↑. Ionization energy ↓. Electron affinity ↓. Electronegativity ↓.", a_ar: "نصف القطر يزداد. طاقة التأين تقل. الميل الإلكتروني يقل. السالبية الكهربائية تقل." },
                { q_en: "Across a period (left to right), what happens to the same four properties?", q_ar: "خلال الدورة من اليسار إلى اليمين، ما تدرج نفس الخواص الأربع؟", a_en: "Atomic radius ↓. Ionization energy ↑. Electron affinity ↑. Electronegativity ↑.", a_ar: "نصف القطر يقل. طاقة التأين تزداد. الميل الإلكتروني يزداد. السالبية الكهربائية تزداد." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "u2",
      en: "Unit 2: Chemical Bonds (Ionic, Covalent, Coordinate)",
      ar: "الوحدة الثانية: الروابط الكيميائية (الأيونية، التساهمية، التناسقية)",
      chapters: [
        {
          id: "u2c1",
          en: "Chapter 1: Ionic Bond & Ionic Compounds",
          ar: "الفصل الأول: الرابطة الأيونية والمركبات الأيونية",
          lessons: [
            {
              id: "u2c1l1",
              en: "Lesson 1-1: Electron Configuration (in bonding)",
              ar: "الدرس (1-1): الترتيب الإلكتروني",
              sections: [
                {
                  h_en: "Valence Electrons & Valence Shell",
                  h_ar: "إلكترونات التكافؤ ومستوى التكافؤ",
                  p_en: "Valence electrons: the electrons in the highest partially or fully filled energy level of the atom; they are the ones used in reaction and bonding with other atoms. Valence shell: the outermost energy level from which electrons are lost or to which they transfer in a chemical reaction. Valency: the number of electrons that the atom loses, gains, or shares to reach electronic stability.",
                  p_ar: "إلكترونات التكافؤ: الإلكترونات الموجودة في أعلى مستوى طاقة ممتلئ جزئياً أو بشكل كامل باإللكترونات في الذرة، وهي التي تستخدم في التفاعل والارتباط مع الذرات الأخرى. مستوى التكافؤ: مستوى الطاقة الخارجي الذي تُفقد منه الإلكترونات أو تنتقل إليه في التفاعل الكيميائي. التكافؤ: عدد الإلكترونات التي تفقدها أو تكتسبها أو تشارك بها الذرة للوصول إلى حالة الاستقرار الإلكتروني."
                },
                {
                  h_en: "Lewis Dot Structure",
                  h_ar: "تمثيل لويس",
                  p_en: "Developed by Gilbert N. Lewis (1875–1946). Valence electrons are shown as dots around the element's symbol. Example: Be (2,2) → symbol Be with 2 dots. This makes it easy to see how atoms bond.",
                  p_ar: "ابتكرها العالم جلبرت لويس (1875–1946). تُوضح إلكترونات التكافؤ في صورة نقاط على رمز ذرة العنصر. مثال: Be (2,2) → رمز Be مع نقطتين. تسهّل فهم كيفية ارتباط الذرات وتكوين المركبات."
                },
                {
                  h_en: "Octet Rule",
                  h_ar: "قاعدة الثمانية",
                  p_en: "«The tendency of an atom to lose, gain, or share valence-shell electrons to reach eight electrons in order to achieve a stability state similar to the noble gas.» Cations form when atoms lose electrons. Anions form when atoms gain electrons.",
                  p_ar: "«ميل ذرة العنصر إلى فقد أو اكتساب أو مشاركة إلكترونات مستوى التكافؤ للوصول إلى ثماني إلكترونات لتحقيق حالة الاستقرار المشابهة للغاز النبيل». الكاتيون: ذرة العنصر عندما تفقد إلكتروناً أو أكثر. الأنيون: ذرة العنصر عندما تكتسب إلكتروناً أو أكثر."
                },
                {
                  h_en: "Exceptions to the Octet Rule",
                  h_ar: "استثناءات قاعدة الثمانية",
                  p_en: "H, Li, Be, B do not achieve the octet rule when losing valence electrons; instead they stabilize with only 2 electrons, similar to the noble gas helium (He).",
                  p_ar: "الهيدروجين H، الليثيوم Li، البريليوم Be، البورون B لا تحقق قاعدة الثمانية عندما تفقد إلكترونات التكافؤ، لأنها تستقر بإلكترونين فقط لتشابه أقرب غاز نبيل وهو الهيليوم He."
                }
              ],
              questions: [
                { q_en: "Write the scientific term: the number of electrons an atom loses, gains, or shares to reach electronic stability.", q_ar: "اكتب المصطلح: عدد الإلكترونات التي تفقدها أو تكتسبها أو تشارك بها الذرة للوصول إلى حالة الاستقرار الإلكتروني.", a_en: "Valency (التكافؤ).", a_ar: "التكافؤ." },
                { q_en: "Write the scientific term: forms showing valence electrons as dots on the symbol of the element's atom.", q_ar: "اكتب المصطلح: الأشكال التي توضح إلكترونات التكافؤ في صورة نقاط على رمز ذرة العنصر.", a_en: "Lewis dot structure (الترتيب الإلكتروني النقطي / تمثيل لويس).", a_ar: "الترتيب الإلكتروني النقطي (تمثيل لويس)." },
                { q_en: "Number of valence electrons for group 17 elements.", q_ar: "عدد إلكترونات التكافؤ لعنصر يقع في المجموعة 17.", a_en: "7.", a_ar: "7." },
                { q_en: "Which atom reaches stability by losing 2 electrons: 9F, 12Mg, 19K, 16S?", q_ar: "أحد الذرات التالية تصل للاستقرار عن طريق فقد إلكترونين: 9F, 12Mg, 19K, 16S", a_en: "12Mg (2,8,2 → loses 2 → Mg²⁺).", a_ar: "12Mg (2,8,2 → يفقد 2 → Mg²⁺)." },
                { q_en: "If the Lewis structure of an element has only 3 dots, predict: valence electrons, group number, electrons lost/gained.", q_ar: "إذا كان الترتيب الإلكتروني النقطي لأحد العناصر يحتوي على ثلاثة نقاط فقط، فكيف يمكنك التنبؤ بعدد إلكترونات التكافؤ ورقم المجموعة؟", a_en: "3 valence electrons → group 13 → tends to lose 3 electrons → forms a cation with 3+ charge.", a_ar: "3 إلكترونات تكافؤ → المجموعة 13 → يميل لفقد 3 إلكترونات → يكوّن كاتيون بشحنة +3." },
                { q_en: "Complete: 3Li tends to …… 1 electron → forms …… ion.", q_ar: "أكمل: 3Li يميل إلى …… إلكترون واحد → يكوّن أيون ……", a_en: "Loses 1 electron → forms Li⁺ (cation).", a_ar: "يفقد إلكتروناً واحداً → يكوّن Li⁺ (كاتيون)." },
                { q_en: "Complete: 9F tends to …… 1 electron → forms …… ion.", q_ar: "أكمل: 9F يميل إلى …… إلكترون واحد → يكوّن أيون ……", a_en: "Gains 1 electron → forms F⁻ (anion).", a_ar: "يكتسب إلكتروناً واحداً → يكوّن F⁻ (أنيون)." },
                { q_en: "Complete: 12Mg tends to …… 2 electrons → forms …… ion.", q_ar: "أكمل: 12Mg يميل إلى …… إلكترونين → يكوّن أيون ……", a_en: "Loses 2 electrons → forms Mg²⁺ (cation).", a_ar: "يفقد إلكترونين → يكوّن Mg²⁺ (كاتيون)." }
              ]
            },
            {
              id: "u2c1l2",
              en: "Lesson 2-1: Ionic Bond",
              ar: "الدرس (2-1): الرابطة الأيونية",
              sections: [
                {
                  h_en: "Definition of Ionic Bond",
                  h_ar: "تعريف الرابطة الأيونية",
                  p_en: "The electrostatic attraction force that binds ions of different charge in the ionic compound. Forms between a metal and a nonmetal. Metal loses electrons → cation; nonmetal gains them → anion.",
                  p_ar: "قوة التجاذب الكهروستاتيكي التي تربط الأيونات مختلفة الشحنة في المركب الأيوني. تتكون بين فلز ولافلز. الفلز يفقد إلكترونات → كاتيون. اللافلز يكتسبها → أنيون."
                },
                {
                  h_en: "Law of Conservation of Charge",
                  h_ar: "قانون حفظ الشحنة",
                  p_en: "The total electric charges of the reactants equal the total electric charges of the products. Used to balance equations by charges.",
                  p_ar: "مجموع الشحنات الكهربائية الكلية للمواد المتفاعلة يساوي مجموع الشحنات الكهربائية الكلية للمواد الناتجة. يُستخدم لوزن المعادلة حسب الشحنات."
                },
                {
                  h_en: "Ionic Character and Electronegativity",
                  h_ar: "الخاصية الأيونية والسالبية الكهربائية",
                  p_en: "Ionic character of a bond appears strongly when the electronegativity difference (ΔEN) between the two bonded elements is greater than or equal to 1.7 (Pauling scale). The greater the difference, the greater the ionic character. Examples: LiCl (2.0), MgO (2.3), NaF (3.1) → NaF > MgO > LiCl.",
                  p_ar: "تظهر الخاصية الأيونية في الرابطة الأيونية بشكل كبير عندما يكون الفرق في السالبية الكهربائية بين العنصرين المكوّنين للرابطة أكبر من أو يساوي 1.7 حسب مقياس بولنج. كلما زاد الفرق زادت الخاصية الأيونية. أمثلة: LiCl (2.0)، MgO (2.3)، NaF (3.1) → الترتيب: NaF > MgO > LiCl."
                },
                {
                  h_en: "Cross Method",
                  h_ar: "طريقة التقاطع",
                  p_en: "If the number of valence electrons a metal loses ≠ the number of electrons a nonmetal needs, swap the numbers and write them as subscripts in the formula (reduce if there is a common factor). Example: K loses 1, O needs 2 → K₂O. Li loses 1, N needs 3 → Li₃N.",
                  p_ar: "إذا كان عدد إلكترونات التكافؤ التي تفقدها ذرة الفلز لا يساوي عدد الإلكترونات اللازمة لاستقرار ذرة اللافلز، نقوم بإبدال الإلكترونات وكتابة العدد أمام الذرة المقابلة (مع الاختصار في حال وجود عامل مشترك). مثال: K يفقد 1، O يحتاج 2 → K₂O. Li يفقد 1، N يحتاج 3 → Li₃N."
                },
                {
                  h_en: "Lewis Structures for Ionic Compounds",
                  h_ar: "تمثيل لويس للمركبات الأيونية",
                  p_en: "Example: Na· + ·Cl: → Na⁺ + :Cl:⁻ → NaCl. Mg: + ·O: → Mg²⁺ + :O:²⁻ → MgO. 2K· + ·O: → 2K⁺ + :O:²⁻ → K₂O. 3Li· + ·N: → 3Li⁺ + :N:³⁻ → Li₃N.",
                  p_ar: "أمثلة: Na· + ·Cl: → Na⁺ + :Cl:⁻ → NaCl. Mg: + ·O: → Mg²⁺ + :O:²⁻ → MgO. 2K· + ·O: → 2K⁺ + :O:²⁻ → K₂O. 3Li· + ·N: → 3Li⁺ + :N:³⁻ → Li₃N."
                }
              ],
              questions: [
                { q_en: "Write the scientific term: electrostatic attraction force binding ions of different charge.", q_ar: "اكتب المصطلح: قوة التجاذب الكهروستاتيكي التي تربط الأيونات مختلفة الشحنة في المركب الأيوني.", a_en: "Ionic bond (الرابطة الأيونية).", a_ar: "الرابطة الأيونية." },
                { q_en: "Which compound forms from Mg + N?", q_ar: "أحد المركبات التالية ينتج من ارتباط المغنيسيوم مع النيتروجين.", a_en: "Mg₃N₂ (Mg loses 2, N gains 3 → cross: 3 Mg + 2 N).", a_ar: "Mg₃N₂ (Mg يفقد 2، N يكتسب 3 → التقاطع: 3Mg + 2N)." },
                { q_en: "Which has the largest ionic character: LiF, MgF₂, K₂O, NaCl?", q_ar: "أي المركبات التالية له أكبر خاصية أيونية: LiF, MgF₂, K₂O, NaCl؟", a_en: "LiF (ΔEN = 4.0 − 1.0 = 3.0).", a_ar: "LiF (الفرق = 4.0 − 1.0 = 3.0)." },
                { q_en: "Arrange LiCl, MgO, NaF by ionic character (ascending).", q_ar: "رَتَّب المركبات الأيونية LiCl, MgO, NaF من حيث الخاصية الأيونية ترتيباً تصاعدياً.", a_en: "LiCl (2.0) < MgO (2.3) < NaF (3.1).", a_ar: "LiCl (2.0) < MgO (2.3) < NaF (3.1)." },
                { q_en: "Show by Lewis structure: K + Cl.", q_ar: "وضّح بطريقة الترتيب الإلكتروني النقطي كيفية ارتباط K مع Cl.", a_en: "K· + ·Cl: → K⁺ + :Cl:⁻ → KCl. Type: ionic bond.", a_ar: "K· + ·Cl: → K⁺ + :Cl:⁻ → KCl. النوع: رابطة أيونية." },
                { q_en: "Show by Lewis structure: Ca + O.", q_ar: "وضّح بطريقة الترتيب الإلكتروني النقطي كيفية ارتباط Ca مع O.", a_en: "Ca: + ·O: → Ca²⁺ + :O:²⁻ → CaO. Type: ionic bond.", a_ar: "Ca: + ·O: → Ca²⁺ + :O:²⁻ → CaO. النوع: رابطة أيونية." },
                { q_en: "Show by Lewis structure: Ca + F.", q_ar: "وضّح بطريقة الترتيب الإلكتروني النقطي كيفية ارتباط الكالسيوم مع الفلور.", a_en: "Ca: + 2·F: → Ca²⁺ + 2:F:⁻ → CaF₂. Compound: calcium fluoride.", a_ar: "Ca: + 2·F: → Ca²⁺ + 2:F:⁻ → CaF₂. المركب: فلوريد الكالسيوم." },
                { q_en: "Show by Lewis structure: Li + N.", q_ar: "وضّح بطريقة الترتيب الإلكتروني النقطي كيفية ارتباط الليثيوم مع النيتروجين.", a_en: "3Li· + ·N: → 3Li⁺ + :N:³⁻ → Li₃N. Compound: lithium nitride.", a_ar: "3Li· + ·N: → 3Li⁺ + :N:³⁻ → Li₃N. المركب: نيتريد الليثيوم." }
              ]
            },
            {
              id: "u2c1l3",
              en: "Lesson 3-1: Ionic Compounds Properties",
              ar: "الدرس (3-1): خواص المركبات الأيونية",
              sections: [
                {
                  h_en: "1. Physical State — Crystal Lattice",
                  h_ar: "1. الحالة الفيزيائية — الشبكة البلورية",
                  p_en: "Ions of different charges line up in «3D extended arrays of cations and anions in the ionic compound» called a crystal lattice. This arrangement increases the attraction force between ions of different charge, making most ionic compounds solid at room temperature.",
                  p_ar: "تصطف الأيونات مختلفة الشحنة على شكل «مصفوفات ثلاثية الأبعاد ممتدة من الكاتيونات والأيونات في المركبات الأيونية» تسمى «الشبكة البلورية». يؤدي هذا الترتيب إلى زيادة قوة التجاذب بين الأيونات مختلفة الشحنة، مما يجعل معظم المركبات الأيونية في الحالة الصلبة عند درجة حرارة الغرفة."
                },
                {
                  h_en: "2. Melting and Boiling Points",
                  h_ar: "2. درجة الانصهار والغليان",
                  p_en: "High, because of the strong attraction between ions. NaCl: mp 801 °C, bp 1413 °C. MgO: mp 2852 °C, bp 3600 °C. The higher the attraction force, the higher the melting/boiling points.",
                  p_ar: "مرتفعة بسبب قوة التجاذب العالية بين الأيونات. NaCl: نقطة الانصهار 801°C، الغليان 1413°C. MgO: الانصهار 2852°C، الغليان 3600°C. كلما ارتفعت قوة التجاذب ارتفعت درجات الانصهار والغليان."
                },
                {
                  h_en: "3. Electrical Conductivity",
                  h_ar: "3. التوصيل الكهربائي",
                  p_en: "Solid ionic compounds do NOT conduct electricity (ions are locked in the crystal lattice, not free to move). Molten or aqueous ionic compounds DO conduct electricity (ions break free from the lattice, become mobile charge carriers).",
                  p_ar: "المركبات الأيونية الصلبة لا توصل التيار الكهربائي (الأيونات مقيدة في الشبكة البلورية). المركبات الأيونية في الحالة المصهورة أو المحلولة توصل التيار (تتفكك الشبكة البلورية وتصبح الأيونات حرة الحركة)."
                }
              ],
              questions: [
                { q_en: "Write the scientific term: 3D extended arrays of cations and anions in ionic compounds.", q_ar: "اكتب المصطلح: مصفوفات ثلاثية الأبعاد ممتدة من الكاتيونات والأيونات في المركبات الأيونية.", a_en: "Crystal lattice (الشبكة البلورية).", a_ar: "الشبكة البلورية." },
                { q_en: "Why do ionic compounds have high melting points?", q_ar: "علل: تتميز المركبات الأيونية بصفة عامة بدرجات غليان مرتفعة.", a_en: "Because of the strong electrostatic attraction between ions of different charge in the crystal lattice.", a_ar: "بسبب قوة التجاذب الكهروستاتيكي الكبيرة بين الأيونات مختلفة الشحنة في الشبكة البلورية." },
                { q_en: "Why does solid NaCl not conduct electricity but molten NaCl does?", q_ar: "علل: كلوريد الصوديوم الصلب لا يوصل التيار الكهربائي بينما المصهور يوصل.", a_en: "In solid state, ions are locked in the crystal lattice (not free). In molten/aqueous state, ions break free and become mobile charge carriers.", a_ar: "في الحالة الصلبة الأيونات مقيدة في الشبكة البلورية (غير حرة). في الحالة المصهورة أو المحلولة تتحرر الأيونات وتصبح حاملة للشحنة." },
                { q_en: "Given Na, Mg, F, Cl — write the maximum number of ionic compound formulas possible.", q_ar: "لديك العناصر Na, Mg, F, Cl. اكتب أكبر عدد من صيغ المركبات الأيونية الممكن تكوينها.", a_en: "NaF, NaCl, MgF₂, MgCl₂.", a_ar: "NaF, NaCl, MgF₂, MgCl₂." },
                { q_en: "Arrange the above ionic compounds by ionic character from lowest to highest.", q_ar: "رتب المركبات الأيونية السابقة من حيث الخاصية الأيونية من الأقل إلى الأعلى.", a_en: "NaCl (3.0 − 0.9 = 2.1) < MgCl₂ (3.0 − 1.2 = 1.8) < NaF (4.0 − 0.9 = 3.1) < MgF₂ (4.0 − 1.2 = 2.8). Corrected order: MgCl₂ < NaCl < MgF₂ < NaF.", a_ar: "MgCl₂ (1.8) < NaCl (2.1) < MgF₂ (2.8) < NaF (3.1)." }
              ]
            }
          ]
        },
        {
          id: "u2c2",
          en: "Chapter 2: Covalent Bond & Coordinate Covalent Bond",
          ar: "الفصل الثاني: الرابطة التساهمية والرابطة التناسقية",
          lessons: [
            {
              id: "u2c2l1",
              en: "Lesson 1-2: Covalent Bond",
              ar: "الدرس (1-2): الرابطة التساهمية",
              sections: [
                {
                  h_en: "Definition",
                  h_ar: "التعريف",
                  p_en: "A bond formed as a result of sharing one or more pairs of electrons between atoms. No transfer of electrons (unlike ionic). Atoms tend toward stability by achieving noble gas configuration through sharing.",
                  p_ar: "رابطة تتكون نتيجة تشارك زوج أو أكثر من الإلكترونات بين الذرات. لا يحدث انتقال للإلكترونات كما في الرابطة الأيونية. تسعى الذرات للاستقرار بمشاركة الإلكترونات للوصول لترتيب غاز نبيل."
                },
                {
                  h_en: "Single Covalent Bond",
                  h_ar: "الرابطة التساهمية الأحادية",
                  p_en: "«The bond that forms when the atom that makes the bond shares one electron to reach stability.» Example: H₂ — H· + ·H → H−H. Cl₂: :Cl· + ·Cl: → :Cl−Cl:.",
                  p_ar: "«الرابطة التي تتكون عندما تشارك الذرة المكونة للرابطة بإلكترون واحد للوصول إلى حالة الاستقرار». مثال: H₂ — H· + ·H → H−H. Cl₂: :Cl· + ·Cl: → :Cl−Cl:."
                },
                {
                  h_en: "Double Covalent Bond",
                  h_ar: "الرابطة التساهمية الثنائية",
                  p_en: "«Bond formed when the atom shares two electrons (one pair of electrons) to reach stability.» Example: O₂ — each O shares 2 electrons. :Ö: + :Ö: → :Ö=Ö:.",
                  p_ar: "«الرابطة التي تتكون عندما تشارك الذرة الواحدة المكونة للرابطة بإلكترونين (زوج واحد) للوصول إلى حالة الاستقرار». مثال: O₂ — كل ذرة أكسجين تشارك بإلكترونين. :Ö: + :Ö: → :Ö=Ö:."
                },
                {
                  h_en: "Triple Covalent Bond",
                  h_ar: "الرابطة التساهمية الثلاثية",
                  p_en: "«Bond formed when the atom shares three electrons to reach stability.» Example: N₂ — each N shares 3 electrons. ·N· + ·N· → N≡N.",
                  p_ar: "«الرابطة التي تتكون عندما تشارك الذرة الواحدة المكونة للرابطة بثلاثة إلكترونات للوصول إلى حالة الاستقرار». مثال: N₂ — كل ذرة نيتروجين تشارك بـ 3 إلكترونات. ·N· + ·N· → N≡N."
                },
                {
                  h_en: "Polar vs Nonpolar Covalent Bonds",
                  h_ar: "الرابطة القطبية وغير القطبية",
                  p_en: "When two different atoms bond and one has higher electronegativity, the shared pair is pulled closer to it. This creates partial charges (δ⁺ and δ⁻) — a polar covalent bond. Examples: HCl, H₂O, NH₃. When the two atoms are the same (H₂, O₂, N₂, Cl₂) or the molecule is symmetric (CCl₄), the bond/molecule is nonpolar.",
                  p_ar: "عند ارتباط ذرتين مختلفتين، وذات سالبية كهربائية أعلى، تنجذب الإلكترونات نحوها. ينتج عن ذلك شحنات جزئية (δ⁺ و δ⁻) — رابطة تساهمية أحادية قطبية. أمثلة: HCl, H₂O, NH₃. عندما تكون الذرتان متماثلتين (H₂, O₂, N₂, Cl₂) أو يكون الجزيء متماثلاً (CCl₄) تكون الرابطة/الجزيء غير قطبي."
                }
              ],
              questions: [
                { q_en: "Write the scientific term: bond formed as a result of sharing one or more pairs of electrons between atoms.", q_ar: "اكتب المصطلح: رابطة تتكون نتيجة تشارك زوج أو أكثر من الإلكترونات بين الذرات.", a_en: "Covalent bond (الرابطة التساهمية).", a_ar: "الرابطة التساهمية." },
                { q_en: "Write the scientific term: bond that forms when the atom shares one electron to reach stability.", q_ar: "اكتب المصطلح: الرابطة التي تتكون عندما تشارك الذرة المكونة للرابطة بإلكترون واحد للوصول إلى حالة الاستقرار.", a_en: "Single covalent bond (الرابطة التساهمية الأحادية).", a_ar: "الرابطة التساهمية الأحادية." },
                { q_en: "Write the scientific term: bond that forms when the atom shares two electrons to reach stability.", q_ar: "اكتب المصطلح: الرابطة التي تتكون عندما تشارك الذرة الواحدة المكونة للرابطة بإلكترونين للوصول إلى حالة الاستقرار.", a_en: "Double covalent bond (الرابطة التساهمية الثنائية).", a_ar: "الرابطة التساهمية الثنائية." },
                { q_en: "Write the scientific term: bond that forms when the atom shares three electrons to reach stability.", q_ar: "اكتب المصطلح: الرابطة التي تتكون عندما تشارك الذرة الواحدة المكونة للرابطة بثلاثة إلكترونات للوصول إلى حالة الاستقرار.", a_en: "Triple covalent bond (الرابطة التساهمية الثلاثية).", a_ar: "الرابطة التساهمية الثلاثية." },
                { q_en: "Show by Lewis structure how two H atoms bond.", q_ar: "وضّح بطريقة الترتيب الإلكتروني النقطي كيفية ارتباط ذرتي الهيدروجين.", a_en: "H· + ·H → H−H → H₂ (single nonpolar covalent).", a_ar: "H· + ·H → H−H → H₂ (أحادية غير قطبية)." },
                { q_en: "Show by Lewis structure how two O atoms bond.", q_ar: "وضّح بطريقة الترتيب الإلكتروني النقطي كيفية ارتباط ذرتي الأكسجين.", a_en: ":Ö: + :Ö: → :Ö=Ö: → O₂ (double nonpolar covalent).", a_ar: ":Ö: + :Ö: → :Ö=Ö: → O₂ (ثنائية غير قطبية)." },
                { q_en: "Show by Lewis structure how two N atoms bond.", q_ar: "وضّح بطريقة الترتيب الإلكتروني النقطي كيفية ارتباط ذرتي النيتروجين.", a_en: "·N· + ·N· → N≡N → N₂ (triple nonpolar covalent).", a_ar: "·N· + ·N· → N≡N → N₂ (ثلاثية غير قطبية)." },
                { q_en: "Show how H bonds with Cl.", q_ar: "وضّح بالترتيب الإلكتروني النقطي كيفية ارتباط الهيدروجين مع الكلور.", a_en: "H· + ·Cl: → H−Cl: → HCl. Type: single polar covalent (Cl more electronegative, δ⁻ on Cl, δ⁺ on H).", a_ar: "H· + ·Cl: → H−Cl: → HCl. النوع: أحادية قطبية (الكلور أعلى سالبية، δ⁻ على Cl، δ⁺ على H)." },
                { q_en: "Show how H bonds with O to form water.", q_ar: "وضّح كيفية ارتباط الهيدروجين مع الأكسجين لتكوين جزيء الماء.", a_en: "2H· + ·Ö: → H−Ö−H → H₂O. Two single polar covalent bonds; O carries δ⁻, H carries δ⁺.", a_ar: "2H· + ·Ö: → H−Ö−H → H₂O. رابطتان أحاديتان قطبيتان؛ O تحمل δ⁻، وH تحمل δ⁺." },
                { q_en: "Show how H bonds with N to form ammonia.", q_ar: "وضّح كيفية ارتباط الهيدروجين مع النيتروجين لتكوين جزيء الأمونيا.", a_en: "3H· + ·N̈· → NH₃. Three single polar covalent bonds; N carries δ⁻, H carries δ⁺.", a_ar: "3H· + ·N̈· → NH₃. ثلاث روابط أحادية قطبية؛ N تحمل δ⁻، وH تحمل δ⁺." },
                { q_en: "Show how C bonds with Cl to form CCl₄. Why is the resulting molecule nonpolar despite polar bonds?", q_ar: "وضّح ارتباط الكربون مع الكلور لتكوين CCl₄. لماذا المركب الناتج غير قطبي رغم الروابط القطبية؟", a_en: "C· + 4·Cl: → CCl₄. Although each C–Cl bond is polar (Cl more electronegative), the four bonds are arranged symmetrically in space, so their partial charges cancel out → nonpolar molecule.", a_ar: "C· + 4·Cl: → CCl₄. رغم أن كل رابطة C–Cl قطبية (الكلور أعلى سالبية)، إلا أن الروابط الأربعة مرتبة بشكل متساوٍ في الفراغ، مما يلغي أثر الشحنات الجزئية → جزيء غير قطبي." }
              ]
            },
            {
              id: "u2c2l2",
              en: "Lesson 2-2: Covalent Compounds Properties",
              ar: "الدرس (2-2): خواص المركبات التساهمية",
              sections: [
                {
                  h_en: "1. Physical State",
                  h_ar: "1. الحالة الفيزيائية",
                  p_en: "Covalent compounds exist in all three states of matter at room temperature: solid (SiO₂ — quartz), liquid (H₂O), gas (NO₂, CO₂, CH₄).",
                  p_ar: "توجد المركبات التساهمية في حالات المادة الثلاث عند درجة حرارة الغرفة: صلبة (SiO₂ — الكوارتز)، سائلة (H₂O)، غازية (NO₂, CO₂, CH₄)."
                },
                {
                  h_en: "2. Melting and Boiling Points",
                  p_en: "Generally LOW (weak intermolecular forces), except giant covalent solids like SiO₂. H₂: mp −259, bp −253. Cl₂: mp −101, bp −34. H₂O: mp 0, bp 100. SiO₂: mp ~1710, bp ~2230.",
                  h_ar: "منخفضة بشكل عام (قوى بين جزيئية ضعيفة)، ما عدا المواد التساهمية الصلبة العملاقة مثل SiO₂. H₂: الانصهار −259، الغليان −253. Cl₂: الانصهار −101، الغليان −34. H₂O: الانصهار 0، الغليان 100. SiO₂: الانصهار ~1710، الغليان ~2230.",
                  h_en_dup: true
                },
                {
                  h_en: "3. Electrical Conductivity",
                  h_ar: "3. التوصيل الكهربائي",
                  p_en: "Nonpolar covalent compounds do NOT conduct electricity in aqueous solution (no free ions). Polar covalent compounds DO conduct electricity (they ionize in water, producing free ions). Examples: CCl₄ (nonpolar, doesn't conduct). HCl, NH₃ (polar, conduct when dissolved).",
                  p_ar: "المركبات التساهمية غير القطبية لا توصل التيار الكهربائي عند ذوبانها في الماء (لا توجد أيونات حرة). المركبات التساهمية القطبية توصل التيار (تتفكك في الماء منتجة أيونات حرة). أمثلة: CCl₄ (غير قطبي، لا يوصل). HCl, NH₃ (قطبي، يوصل عند الذوبان)."
                },
                {
                  h_en: "Diamond (إضاءات)",
                  h_ar: "الألماس (إضاءات)",
                  p_en: "Diamond is the hardest natural material. Made of carbon only; each carbon bonds to 4 neighbors via strong covalent bonds, forming a 3D tetrahedral lattice. Used in drilling, cutting glass, shaping metals, and as a heat sink in advanced electronics.",
                  p_ar: "الألماس أصلب المواد الطبيعية. يتكون من الكربون فقط؛ كل ذرة كربون ترتبط بأربع ذرات مجاورة عبر روابط تساهمية قوية جداً، مكوّنة شبكة رباعية السطوح ثلاثية الأبعاد. يُستخدم في الحفر وقطع الزجاج وتشكيل المعادن وككمشّت للحرارة في الإلكترونيات."
                }
              ],
              questions: [
                { q_en: "Why does NH₃ conduct electricity when dissolved in water but CCl₄ doesn't?", q_ar: "علل: عند إذابة الأمونيا في الماء، فإن المحلول يوصل التيار الكهربائي، بينما CCl₄ لا يوصل.", a_en: "NH₃ is a polar covalent compound — it ionizes in water producing free ions (charge carriers). CCl₄ is nonpolar and does not ionize, so no free ions exist.", a_ar: "NH₃ مركب تساهمي قطبي — يتفكك في الماء منتجاً أيونات حرة (حاملات شحنة). CCl₄ غير قطبي ولا يتفكك، فلا توجد أيونات حرة." },
                { q_en: "Complete: HCl is a …… compound; Cl₂ is a …… compound.", q_ar: "أكمل: HCl مركب ……، Cl₂ مركب ……", a_en: "HCl: polar covalent. Cl₂: nonpolar covalent.", a_ar: "HCl: تساهمي قطبي. Cl₂: تساهمي غير قطبي." },
                { q_en: "Does Cl₂ conduct electricity when dissolved in water?", q_ar: "هل يوصل Cl₂ التيار الكهربائي عند ذوبانه في الماء؟", a_en: "No — it's nonpolar covalent, does not ionize in water, no free charge carriers.", a_ar: "لا — لأنه تساهمي غير قطبي، لا يتفكك في الماء، لا توجد حاملات شحنة حرة." },
                { q_en: "Why are most covalent compounds low in melting/boiling points?", q_ar: "علل: معظم المركبات التساهمية منخفضة درجات الانصهار والغليان.", a_en: "Because the intermolecular forces between covalent molecules are weak; only a little energy is needed to separate them.", a_ar: "لأن القوى بين الجزيئية في المركبات التساهمية ضعيفة؛ فقليل من الطاقة يكفي لفصلها." }
              ]
            },
            {
              id: "u2c2l3",
              en: "Lesson 3-2: Coordinate Bond",
              ar: "الدرس (3-2): الرابطة التناسقية",
              sections: [
                {
                  h_en: "Definition",
                  h_ar: "التعريف",
                  p_en: "A type of covalent bond formed when one atom donates a pair (or more) of non-bonding electrons to another atom or ion that shares in making the bond. The donor provides both electrons of the pair; the acceptor receives them.",
                  p_ar: "نوع من أنواع الروابط التساهمية تتكون نتيجة مساهمة ذرة مع ذرة أخرى أو أيون بزوج أو أكثر من الإلكترونات غير المشتركة في روابط. الذرة المانحة: تقدم (تمنح) زوجاً أو أكثر من الإلكترونات غير المشاركة في الرابطة. الذرة المستقبلة: الذرة أو الأيون الذي يستقبل زوجاً أو أكثر من الإلكترونات."
                },
                {
                  h_en: "Hydronium Ion (H₃O⁺)",
                  h_ar: "كاتيون الهيدرونيوم (H₃O⁺)",
                  p_en: "Water has 2 non-bonding (lone) pairs on oxygen. It donates one pair to H⁺ (which has no electrons). Water is the donor, H⁺ is the acceptor. H₃O⁺ has 2 single covalent + 1 coordinate covalent bond.",
                  p_ar: "الماء لديه زوجان غير مشتركين على الأكسجين. يمنح زوجاً واحداً لأيون H⁺ (الذي لا يملك إلكترونات). الماء هو المانح، H⁺ هو المستقبل. H₃O⁺ يحتوي على رابطتين تساهميتين أحاديتين + رابطة تناسقية واحدة."
                },
                {
                  h_en: "Ammonium Ion (NH₄⁺)",
                  h_ar: "كاتيون الأمونيوم (NH₄⁺)",
                  p_en: "Ammonia has 1 non-bonding lone pair on nitrogen. It donates this pair to H⁺. NH₃ is the donor; H⁺ is the acceptor. NH₄⁺ has 3 single covalent + 1 coordinate covalent bond.",
                  p_ar: "الأمونيا لديها زوج غير مشترك واحد على النيتروجين. تمنحه لأيون H⁺. NH₃ هو المانح، H⁺ هو المستقبل. NH₄⁺ يحتوي على 3 روابط تساهمية أحادية + رابطة تناسقية واحدة."
                },
                {
                  h_en: "Carbon Monoxide (CO)",
                  h_ar: "أول أكسيد الكربون (CO)",
                  p_en: "Contains 2 covalent bonds + 1 coordinate covalent bond (the third bond in C≡O is coordinate — oxygen donates a pair).",
                  p_ar: "يحتوي على رابطتين تساهميتين + رابطة تناسقية واحدة (الرابطة الثالثة في C≡O تناسقية — الأكسجين يمنح زوجاً)."
                },
                {
                  h_en: "Kuwait Fund Connection (من وطني)",
                  h_ar: "الصندوق الكويتي (من وطني)",
                  p_en: "The Kuwait Fund for Development was established on Dec 31, 1961 as the first development institution in the Middle East created by a developing country to assist other developing countries. Kuwait acts as «donor country» (has financial surplus and technical expertise) sharing with «receiving countries» — mirroring the donor/acceptor concept in coordinate bonds.",
                  p_ar: "تأسس الصندوق الكويتي للتنمية في 31 ديسمبر 1961 ليكون أول مؤسسة إنمائية في الشرق الأوسط تُنشأ من قبل دولة نامية لمساعدة الدول النامية الأخرى. تمثل الكويت «الدولة المانحة» (تملك الفائض المالي والخبرة الفنية) تشارك بها الدول النامية «الدول المستقبلة» — بموازاة مفهوم المانح/المستقبل في الرابطة التناسقية."
                }
              ],
              questions: [
                { q_en: "Write the scientific term: a type of covalent bond formed when one atom contributes a pair of non-bonding electrons to another atom or ion.", q_ar: "اكتب المصطلح: نوع من أنواع الروابط التساهمية تتكون نتيجة مساهمة ذرة مع ذرة أخرى أو أيون بزوج أو أكثر من الإلكترونات غير المشتركة في روابط.", a_en: "Coordinate covalent bond (الرابطة التناسقية).", a_ar: "الرابطة التناسقية." },
                { q_en: "Write the scientific term: the atom that donates a pair or more of non-bonding electrons.", q_ar: "اكتب المصطلح: الذرة التي تقدم (تمنح) زوجاً أو أكثر من الإلكترونات غير المشاركة في الرابطة.", a_en: "Donor atom (الذرة المانحة).", a_ar: "الذرة المانحة." },
                { q_en: "Write the scientific term: the atom or ion that receives a pair or more of electrons from the donor atom.", q_ar: "اكتب المصطلح: الذرة أو الأيون الذي يستقبل زوجاً أو أكثر من الإلكترونات من الذرة المانحة.", a_en: "Acceptor atom (الذرة المستقبلة).", a_ar: "الذرة المستقبلة." },
                { q_en: "Show the Lewis structure of H₃O⁺ and identify bond types.", q_ar: "وضّح بطريقة الترتيب الإلكتروني النقطي كيفية ارتباط جزيء الماء مع كاتيون الهيدروجين لتكوين كاتيون الهيدرونيوم (H₃O⁺).", a_en: ":Ö: with 2 lone pairs + H⁺ → H−Ö⁺(H)−H. Contains 2 single covalent + 1 coordinate bond. Water is donor, H⁺ is acceptor.", a_ar: ":Ö: مع زوجين غير مشتركين + H⁺ → H−Ö⁺(H)−H. يحتوي على رابطتين تساهميتين + رابطة تناسقية واحدة. الماء مانح، H⁺ مستقبل." },
                { q_en: "Show the Lewis structure of NH₄⁺ and identify bond types.", q_ar: "وضّح بطريقة الترتيب الإلكتروني النقطي كيفية ارتباط جزيء الأمونيا مع كاتيون الهيدروجين لتكوين كاتيون الأمونيوم (NH₄⁺).", a_en: "NH₃ with 1 lone pair + H⁺ → NH₄⁺. Contains 3 single covalent + 1 coordinate bond. NH₃ is donor, H⁺ is acceptor.", a_ar: "NH₃ مع زوج غير مشترك + H⁺ → NH₄⁺. يحتوي على 3 روابط تساهمية أحادية + رابطة تناسقية واحدة. NH₃ مانح، H⁺ مستقبل." },
                { q_en: "Match: which compound contains 3 single covalent + 1 coordinate bond?", q_ar: "أي المركبات يحتوي على ثلاث روابط تساهمية أحادية + رابطة تناسقية واحدة؟", a_en: "NH₄⁺ (ammonium).", a_ar: "NH₄⁺ (الأمونيوم)." },
                { q_en: "Match: which compound contains 2 single covalent + 1 coordinate bond?", q_ar: "أي المركبات يحتوي على رابطتين تساهميتين أحاديتين + رابطة تناسقية واحدة؟", a_en: "H₃O⁺ (hydronium).", a_ar: "H₃O⁺ (الهيدرونيوم)." },
                { q_en: "Match: which compound contains 2 covalent + 1 coordinate bond?", q_ar: "أي المركبات يحتوي على رابطتين تساهميتين + رابطة تناسقية واحدة؟", a_en: "CO (carbon monoxide).", a_ar: "CO (أول أكسيد الكربون)." }
              ]
            }
          ]
        }
      ]
    }
  ]
};