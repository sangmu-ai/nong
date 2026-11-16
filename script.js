// Data for MAFRA services & policies
const servicesData = [
  {
    id: "food-security",
    category: "food-security",
    tag: "식량안보 & 쌀",
    icon: "fa-bowl-rice",
    iconBg: "linear-gradient(135deg, #d95a00, #b84500)",
    title: "식량주권 확보 & 쌀 수급 안정",
    desc: "가을 수확기 쌀값 안정과 국제 공급망 위기 속에서 국민의 주식인 쌀과 필수 곡물을 안정적으로 지키고 자급률을 높입니다.",
    points: [
      "가루쌀(분질미), 콩, 밀 등 전략작물직불제 대폭 확대",
      "가을 수확기 공공비축미 매입 및 정부양곡 수급안정 조절",
      "농가 소득안정과 식량 자급률 55% 달성 목표"
    ],
    target: "전 국민 & 벼·식량작물 재배 농업인",
    details: `
      <h4>왜 중요한가요?</h4>
      <p>기후변화와 국제 정세 불안에 따라 곡물 수급의 중요성이 커졌습니다. 특히 가을 수확기 쌀 수급 균형을 맞추기 위해 <strong>'가루쌀'</strong>과 <strong>전략작물</strong> 재배를 전폭 지원하고 수확기 공공비축미를 대대적으로 매입합니다.</p>
      <br>
      <h4>일반인에게 미치는 혜택</h4>
      <ul>
        <li>언제나 안정적인 가격과 품질의 햅쌀과 가공식품 공급</li>
        <li>글루텐 프리 등 다양한 국산 쌀가공식품(빵, 면, 디저트 등) 선택권 확대</li>
      </ul>
    `
  },
  {
    id: "smart-ag",
    category: "smart-ag",
    tag: "스마트농업 & 청년농",
    icon: "fa-robot",
    iconBg: "linear-gradient(135deg, #e67e22, #d35400)",
    title: "스마트농업 확산 & 미래 청년농 육성",
    desc: "AI, 빅데이터, 로봇 기술을 온실과 노지에 접목하여 농업의 첨단 산업화를 이끌고 미래를 이끌 젊은 청년 창업농을 전폭 지원합니다.",
    points: [
      "스마트팜 혁신밸리를 통한 실증 및 청년 창업 보육",
      "청년농 영농정착지원금 (최대 월 110만 원, 최장 3년)",
      "우수 농지 및 저리 영농창업자금(최대 5억원) 연계"
    ],
    target: "청년 창업희망자, 귀농귀촌인, 첨단 농업경영체",
    details: `
      <h4>농업이 첨단 IT 산업으로 변신합니다</h4>
      <p>스마트폰 하나로 온실 온도와 습도를 제어하고, 인공지능이 생육 상태를 분석하여 수확량을 극대화합니다. 힘든 노동은 로봇과 드론이 대신합니다.</p>
      <br>
      <h4>청년들을 위한 특별 지원 혜택</h4>
      <ul>
        <li>만 18세 이상 ~ 40세 미만 청년농에게 초기 생활안정자금 지원</li>
        <li>실습 중심의 20개월 스마트팜 청년창업 보육과정 전액 국비 지원</li>
        <li>상주, 김제, 밀양, 고흥 등 4대 스마트팜 혁신밸리 임대온실 입주 기회</li>
      </ul>
    `
  },
  {
    id: "animal-welfare",
    category: "animal-welfare",
    tag: "동물복지 & 축산",
    icon: "fa-paw",
    iconBg: "linear-gradient(135deg, #c0392b, #962d22)",
    title: "성숙한 반려문화 & 친환경 동물복지 축산",
    desc: "반려동물 양육인 1,500만 시대를 맞아 동물보호·복지를 강화하고, 지속 가능한 친환경 축산 환경을 조성합니다.",
    points: [
      "반려동물 등록제 의무화 및 유기동물 입양 지원",
      "반려동물 표준 진료비 고지 및 맹견 사육허가제 시행",
      "스마트 축사 현대화 및 가축 질병(ASF, AI 등) 첨단 방역"
    ],
    target: "반려동물 보호자, 축산 농가, 일반 소비자",
    details: `
      <h4>사람과 동물이 모두 행복한 사회</h4>
      <p>동물보호 전담부서를 확대 개편하여 동물학대 처벌 강화, 입양 활성화, 동물병원 주요 진료비 사전 고지제도를 추진하여 반려인의 진료비 부담을 덜어드립니다.</p>
      <br>
      <h4>지속 가능한 축산</h4>
      <ul>
        <li>스마트 냄새 저감 기술 및 가축 분뇨 자원화 지원</li>
        <li>가을·겨울철 철새 도래기 조류인플루엔자(AI) 및 ASF 24시간 특별방역 체계 가동</li>
      </ul>
    `
  },
  {
    id: "safe-food",
    category: "safe-food",
    tag: "안전한 먹거리 & 물가안정",
    icon: "fa-apple-whole",
    iconBg: "linear-gradient(135deg, #e74c3c, #c0392b)",
    title: "국민 안심 먹거리 & 장바구니 물가안정",
    desc: "식탁에 오르는 신선 농축산물의 잔류농약·원산지를 철저히 관리하고, 농축산물 할인지원을 통해 국민 장바구니 부담을 덜어드립니다.",
    points: [
      "국민 장바구니 물가 안정을 위한 대규모 농축산물 할인지원(20~30%)",
      "GAP(농산물우수관리) 및 국가 친환경 인증 철저 관리",
      "농식품 원산지 단속 및 온라인 플랫폼 유통질서 확립"
    ],
    target: "일반 소비자 및 주부, 가계 소비자 전반",
    details: `
      <h4>직접 체감하는 장바구니 혜택</h4>
      <p>농식품부는 김장철 및 성수기 채소, 과일, 축산물 가격 변동 시 정부 예산을 투입해 대형마트, 전통시장에서 즉시 할인(최대 30%) 혜택을 제공합니다.</p>
      <br>
      <h4>신선하고 안전한 식탁</h4>
      <ul>
        <li>친환경/GAP 인증으로 잔류농약 걱정 없는 안전한 먹거리 검증</li>
        <li>국립농산물품질관리원을 통한 24시간 원산지 표시 부정유통 단속</li>
      </ul>
    `
  },
  {
    id: "rural-life",
    category: "rural-life",
    tag: "살기 좋은 농촌 & 힐링",
    icon: "fa-mountain-sun",
    iconBg: "linear-gradient(135deg, #af601a, #874912)",
    title: "농촌공간 재구조화 & 활력 넘치는 농촌 조성",
    desc: "쾌적하고 살기 좋은 농촌을 만들기 위해 농촌공간계획을 수립하고, 농촌 관광·치유농업으로 국민에게 쉼을 선물합니다.",
    points: [
      "농촌협약 및 공간정비 사업을 통한 유해시설 정비와 정주여건 개선",
      "귀농귀촌 통합플랫폼 '그린대로' 원스톱 정보 지원",
      "가을 농촌 힐링 테마 여행 프로그램 및 치유농업센터 육성"
    ],
    target: "농촌 주민, 귀농귀촌 희망자, 농촌 방문 힐링 여행객",
    details: `
      <h4>지방소멸 위기 극복과 새로운 삶터 농촌</h4>
      <p>난개발로 어지러웠던 농촌마을을 정비하여 주거지역, 산업지역, 재생에너지 지구 등으로 체계화하는 '농촌공간계획법'을 시행 중입니다.</p>
      <br>
      <h4>도시민을 위한 가을 농촌 쉼터</h4>
      <ul>
        <li>치유농장(농업 활동을 통해 스트레스 해소 및 심신 치유) 프로그램 보급</li>
        <li>'그린대로' 플랫폼에서 주거, 농지, 일자리 맞춤 매칭</li>
      </ul>
    `
  },
  {
    id: "k-food",
    category: "k-food",
    tag: "K-Food 수출 진흥",
    icon: "fa-earth-asia",
    iconBg: "linear-gradient(135deg, #d35400, #a04000)",
    title: "K-Food+ 수출 100억 불 & 푸드테크 신성장",
    desc: "라면, 김치, 딸기, 포도 등 우수한 우리 농식품과 스마트팜을 세계 시장에 수출하여 대한민국의 신성장 동력으로 키웁니다.",
    points: [
      "K-Food+ 수출 개척 및 해외 대형 유통망 판촉 지원",
      "신선농산물 콜드체인 물류 인프라 강화",
      "푸드테크(식물성 대체식품, 식품로봇) 10대 핵심기술 R&D 육성"
    ],
    target: "식품 수출기업, 가공식품 제조사, 해외 소비자",
    details: `
      <h4>전 세계가 열광하는 K-Food의 힘</h4>
      <p>김치, 라면뿐 아니라 프리미엄 딸기, 샤인머스캣, 쌀가공식품(냉동김밥 등)이 글로벌 히트 상품으로 자리잡고 있습니다.</p>
      <br>
      <h4>푸드테크 산업 육성</h4>
      <ul>
        <li>배양육, 식물성 단백질 등 미래 먹거리 신산업 규제 혁신 지원</li>
        <li>외식·조리 로봇 등 푸드테크 스타트업 전용 펀드 조성</li>
      </ul>
    `
  }
];

// Citizen finder recommendations
const roleRecommendations = {
  consumer: {
    title: "풍요롭고 알뜰한 가을 식탁을 위한 맞춤 정보",
    desc: "가을 수확기 농축산물 할인지원 혜택과 믿을 수 있는 인증마크로 가계 장바구니 부담을 덜어드립니다.",
    items: [
      "<strong>농축산물 할인지원:</strong> 전통시장 온누리상품권 환급(최대 30%) 및 주요 마트 가을 제철 과일·채소 즉시 할인",
      "<strong>안심 먹거리 확인:</strong> GAP, 유기농, 무항생제 국가 인증마크 확인법 알아보기",
      "<strong>로컬푸드 직거래 장터:</strong> 갓 수확한 햅쌀과 제철 농산물을 유통마진 없이 합리적인 가격에 구매"
    ]
  },
  youth: {
    title: "농업 창업과 미래 스마트농의 꿈 지원",
    desc: "초기 자금부터 온실 임대, 첨단 교육까지 패키지로 뒷받침합니다.",
    items: [
      "<strong>청년농 영농정착지원금:</strong> 만 18~40세 미만 독립경영 3년 이하 청년 월 최대 110만 원 지급",
      "<strong>스마트팜 청년창업 보육사업:</strong> 20개월 전문 실습 교육비 전액 국비 무료 지원",
      "<strong>창업자금 융자:</strong> 연 1.5% 저리 융자 최대 5억원 지원 및 우수 농지 임대 지원"
    ]
  },
  "pet-owner": {
    title: "사랑하는 반려동물과 안심하고 행복한 반려생활",
    desc: "동물 등록부터 진료비 투명화, 펫티켓 정보를 제공합니다.",
    items: [
      "<strong>동물등록제:</strong> 가까운 동물병원에서 마이크로칩 등록 시 유실 방지 및 지자체 혜택 연계",
      "<strong>진료비 사전고지제:</strong> 진찰, 예방접종, X-ray 등 주요 진료비용을 미리 확인하고 진료받기",
      "<strong>유기동물 입양비 지원:</strong> 입양 시 치료비, 예방접종비 등 최대 25만 원 상당 지원 혜택"
    ]
  },
  farmer: {
    title: "가을 수확기 경영 안정과 영농 편의를 위한 든든한 동반자",
    desc: "기후재해 예방, 공공비축미 매입, 직불금 지원, 스마트 장비 도입을 도와드립니다.",
    items: [
      "<strong>기본형 & 전략작물직불제:</strong> 쌀 수급 조절 작물(가루쌀, 콩 등) 재배 시 1ha당 최대 430만 원 지원",
      "<strong>수확기 쌀값 안정 대책:</strong> 정부 공공비축미 대량 매입 및 시장격리 물량 방출 억제",
      "<strong>농작물재해보험:</strong> 자연재해로 인한 수확량 감소 시 손실액의 최대 80~90% 보장"
    ]
  },
  traveler: {
    title: "황금빛 들녘과 붉은 단풍, 가을 농촌 테마 여행",
    desc: "도시를 벗어나 신선한 자연과 가을 정취를 만끽하는 힐링 농촌 관광을 추천합니다.",
    items: [
      "<strong>가을 농촌체험마을:</strong> 사과·감 수확 체험, 곶감 만들기, 팜스테이 숙박 할인",
      "<strong>치유농장(Care Farming):</strong> 스트레스 치유와 원예 심리 상담 프로그램 참여",
      "<strong>'놀러와 팜' 플랫폼:</strong> 전국 가을 단풍 및 농촌 테마 여행 코스 및 할인쿠폰 실시간 확인"
    ]
  }
};

// DOM References
const cardsGrid = document.getElementById("cardsGrid");
const filterChips = document.getElementById("filterChips");
const keywordSearch = document.getElementById("keywordSearch");
const searchBtn = document.getElementById("searchBtn");
const userRoleSelect = document.getElementById("userRole");
const findBenefitBtn = document.getElementById("findBenefitBtn");
const recommendationResult = document.getElementById("recommendationResult");
const modal = document.getElementById("detailModal");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const themeToggle = document.getElementById("themeToggle");

// Theme (Dark / Light Mode)
function initTheme() {
  const savedTheme = localStorage.getItem("mafra_portal_theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    updateThemeButton(true);
  } else {
    updateThemeButton(false);
  }
}

function toggleTheme() {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("mafra_portal_theme", isDark ? "dark" : "light");
  updateThemeButton(isDark);
}

function updateThemeButton(isDark) {
  const icon = themeToggle.querySelector("i");
  const text = themeToggle.querySelector(".theme-text");
  if (isDark) {
    icon.className = "fa-solid fa-sun";
    if (text) text.innerText = "주간 모드";
    themeToggle.title = "가을 주간 모드로 전환";
  } else {
    icon.className = "fa-solid fa-moon";
    if (text) text.innerText = "야간 모드";
    themeToggle.title = "야간 모드로 전환";
  }
}

themeToggle.addEventListener("click", toggleTheme);

// Render Service Cards
function renderCards(filter = "all", keyword = "") {
  cardsGrid.innerHTML = "";
  
  const filtered = servicesData.filter(item => {
    const matchesCategory = filter === "all" || item.category === filter;
    const query = keyword.trim().toLowerCase();
    const matchesKeyword = !query || 
      item.title.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query) ||
      item.tag.toLowerCase().includes(query) ||
      item.points.some(p => p.toLowerCase().includes(query));
    return matchesCategory && matchesKeyword;
  });

  if (filtered.length === 0) {
    cardsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px;">
        <i class="fa-solid fa-circle-exclamation" style="font-size: 2.5rem; color: var(--primary); margin-bottom: 12px;"></i>
        <p style="font-size: 1.1rem; color: var(--text-main); font-weight: 700;">일치하는 주요 업무나 정책 정보가 없습니다.</p>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 6px;">다른 키워드로 검색하거나 카테고리 필터를 변경해 보세요.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const cardEl = document.createElement("div");
    cardEl.className = "card";
    cardEl.innerHTML = `
      <span class="card-header-badge">${item.tag}</span>
      <div class="card-icon-title">
        <div class="card-icon" style="background: ${item.iconBg};">
          <i class="fa-solid ${item.icon}"></i>
        </div>
        <h3>${item.title}</h3>
      </div>
      <p class="card-desc">${item.desc}</p>
      <ul class="card-points">
        ${item.points.map(p => `<li><i class="fa-solid fa-check"></i> <span>${p}</span></li>`).join("")}
      </ul>
      <div class="card-footer">
        <span class="target-audience"><i class="fa-solid fa-users"></i> ${item.target}</span>
        <button class="btn-detail" data-id="${item.id}">자세히 보기 &rarr;</button>
      </div>
    `;
    cardsGrid.appendChild(cardEl);
  });

  // Attach Detail Button Handlers
  document.querySelectorAll(".btn-detail").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      openModal(id);
    });
  });
}

// Open Modal
function openModal(id) {
  const item = servicesData.find(s => s.id === id);
  if (!item) return;
  modalTitle.innerText = item.title;
  modalBody.innerHTML = `
    <div style="margin-bottom: 16px;">
      <span style="font-size: 0.85rem; font-weight: 700; color: var(--primary); background: var(--primary-light); padding: 4px 10px; border-radius: 6px; border: 1px solid var(--border);">
        ${item.tag}
      </span>
    </div>
    <p style="font-size: 1.05rem; color: var(--text-main); margin-bottom: 16px;"><strong>핵심 내용:</strong> ${item.desc}</p>
    <hr style="border: none; border-top: 1px solid var(--border); margin: 16px 0;">
    <div>${item.details}</div>
  `;
  modal.classList.add("open");
}

function closeModal() {
  modal.classList.remove("open");
}

// Filter Chip Event
filterChips.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;

  document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
  chip.classList.add("active");

  const category = chip.getAttribute("data-category");
  renderCards(category, keywordSearch.value);
});

// Search Event
function handleSearch() {
  const activeChip = document.querySelector(".chip.active");
  const category = activeChip ? activeChip.getAttribute("data-category") : "all";
  renderCards(category, keywordSearch.value);
}

searchBtn.addEventListener("click", handleSearch);
keywordSearch.addEventListener("keyup", (e) => {
  if (e.key === "Enter") handleSearch();
});

// Interactive Finder
function renderRecommendation() {
  const role = userRoleSelect.value;
  const data = roleRecommendations[role];
  if (!data) return;

  recommendationResult.innerHTML = `
    <div class="benefit-card">
      <h4><i class="fa-solid fa-gift"></i> ${data.title}</h4>
      <p>${data.desc}</p>
      <ul class="benefit-list">
        ${data.items.map(item => `<li>${item}</li>`).join("")}
      </ul>
    </div>
  `;
}

findBenefitBtn.addEventListener("click", renderRecommendation);
userRoleSelect.addEventListener("change", renderRecommendation);

// Counter Animation for Stats
function animateCounters() {
  const counters = document.querySelectorAll(".stat-num");
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const speed = 25;
    const increment = Math.ceil(target / 40);

    const updateCount = () => {
      count += increment;
      if (count < target) {
        counter.innerText = count.toLocaleString();
        setTimeout(updateCount, speed);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };
    updateCount();
  });
}

// Accordion (FAQ)
document.querySelectorAll(".accordion-header").forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    item.classList.toggle("active");
  });
});

// Modal Events
modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) {
    closeModal();
  }
});

// Mobile menu toggle
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// Close mobile menu on click nav links
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});

// Init
window.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderCards();
  renderRecommendation();
  animateCounters();
});
