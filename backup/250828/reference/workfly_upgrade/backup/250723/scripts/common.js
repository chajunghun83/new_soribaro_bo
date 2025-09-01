// 서브메뉴 토글 함수
function toggleSubmenu(submenuId) {
    const submenu = document.getElementById(submenuId);
    const isExpanded = submenu.classList.contains('expanded');
    
    // 모든 서브메뉴 닫기
    document.querySelectorAll('.submenu').forEach(menu => {
        menu.classList.remove('expanded');
    });
    
    // 클릭된 서브메뉴만 토글
    if (!isExpanded) {
        submenu.classList.add('expanded');
    }
}

// 페이지 전환 함수 (iframe 방식으로 변경)
function showPage(pageId) {
    const iframe = document.getElementById('content-frame');
    
    // 모든 메뉴 아이템 비활성화
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // 선택된 메뉴 아이템 활성화
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    // 페이지별 iframe src 설정
    let pagePath = '';
    switch(pageId) {
        case 'dashboard':
            pagePath = 'pages/dashboard.html';
            break;
        case 'members-search':
            pagePath = 'pages/members/members-search.html';
            break;
        case 'withdrawn-members':
            pagePath = 'pages/members/withdrawn-members.html';
            break;
        case 'blocked-members':
            pagePath = 'pages/members/blocked-members.html';
            break;
        case 'coupon-management':
            pagePath = 'pages/members/coupon-management.html';
            break;
        case 'workspy-recruitment':
            pagePath = 'pages/workspy/recruitment.html';
            break;
        case 'workspy-projects':
            pagePath = 'pages/workspy/projects.html';
            break;
        case 'soribaro-recording':
            pagePath = 'pages/services/soribaro/recording.html';
            break;
        case 'soribaro-recording-orders':
            pagePath = 'pages/services/soribaro/recording-orders.html';
            break;
        case 'soribaro-meeting':
            pagePath = 'pages/services/soribaro/meeting.html';
            break;
        case 'soribaro-vod':
            pagePath = 'pages/services/soribaro/vod.html';
            break;
        case 'soribaro-translation':
            pagePath = 'pages/services/soribaro/translation.html';
            break;
        case 'clipdesk-work':
            pagePath = 'pages/services/clipdesk/work.html';
            break;
        case 'clipdesk-orders':
            pagePath = 'pages/services/clipdesk/orders.html';
            break;
        case 'customer-management':
            pagePath = 'pages/customer-management.html';
            break;
        case 'post-management':
            pagePath = 'pages/content/post-management.html';
            break;
        case 'marketing-content':
            pagePath = 'pages/content/marketing-content.html';
            break;
        case 'work-reviews':
            pagePath = 'pages/content/work-reviews.html';
            break;
        case 'price-policy':
            pagePath = 'pages/policy/price-policy.html';
            break;
        case 'template-management':
            pagePath = 'pages/policy/template-management.html';
            break;
        case 'basic-settings':
            pagePath = 'pages/policy/basic-settings.html';
            break;
        case 'system-management':
            pagePath = 'pages/system-management.html';
            break;
        default:
            pagePath = 'pages/dashboard.html';
    }
    
    if (iframe && pagePath) {
        iframe.src = pagePath;
    }
}

// 시군구 데이터
const addressData = {
    seoul: ['종로구', '중구', '용산구', '성동구', '광진구', '동대문구', '중랑구', '성북구', '강북구', '도봉구', '노원구', '은평구', '서대문구', '마포구', '양천구', '강서구', '구로구', '금천구', '영등포구', '동작구', '관악구', '서초구', '강남구', '송파구', '강동구'],
    busan: ['중구', '서구', '동구', '영도구', '부산진구', '동래구', '남구', '북구', '강서구', '해운대구', '사하구', '금정구', '연제구', '수영구', '사상구', '기장군'],
    daegu: ['중구', '동구', '서구', '남구', '북구', '수성구', '달서구', '달성군', '군위군'],
    incheon: ['중구', '동구', '미추홀구', '연수구', '남동구', '부평구', '계양구', '서구', '강화군', '옹진군'],
    gwangju: ['동구', '서구', '중구', '북구', '광산구'],
    daejeon: ['중구', '서구', '동구', '유성구', '대덕구'],
    ulsan: ['중구', '남구', '동구', '북구', '울주군'],
    sejong: ['조치원읍', '연기면', '연동면', '부강면', '금남면', '장군면', '연서면', '전의면', '전동면', '소정면', '한솔동', '새롬동', '나성동', '다정동', '도담동', '어진동', '해밀동', '아름동', '종촌동', '고운동', '보람동', '대평동', '소담동', '반곡동'],
    gyeonggi: ['수원시', '성남시', '의정부시', '안양시', '부천시', '광명시', '동두천시', '평택시', '안산시', '고양시', '과천시', '구리시', '남양주시', '오산시', '시흥시', '군포시', '의왕시', '하남시', '용인시', '파주시', '이천시', '안성시', '김포시', '화성시', '광주시', '양주시', '포천시', '여주시', '연천군', '가평군', '양평군'],
    gangwon: ['춘천시', '원주시', '강릉시', '동해시', '태백시', '속초시', '삼척시', '홍천군', '횡성군', '영월군', '평창군', '정선군', '철원군', '화천군', '양구군', '인제군', '고성군', '양양군'],
    chungbuk: ['청주시', '충주시', '제천시', '보은군', '옥천군', '영동군', '증평군', '진천군', '괴산군', '음성군', '단양군'],
    chungnam: ['천안시', '공주시', '보령시', '아산시', '서산시', '논산시', '계룡시', '당진시', '금산군', '부여군', '서천군', '청양군', '홍성군', '예산군', '태안군'],
    jeonbuk: ['전주시', '군산시', '익산시', '정읍시', '남원시', '김제시', '진안군', '완주군', '무주군', '장수군', '임실군', '순창군', '고창군', '부안군'],
    jeonnam: ['목포시', '여수시', '순천시', '나주시', '광양시', '담양군', '곡성군', '구례군', '고흥군', '보성군', '화순군', '장흥군', '강진군', '해남군', '영암군', '무안군', '함평군', '영광군', '장성군', '완도군', '진도군', '신안군'],
    gyeongbuk: ['포항시', '경주시', '김천시', '안동시', '구미시', '영주시', '영천시', '상주시', '문경시', '경산시', '의성군', '청송군', '영양군', '영덕군', '청도군', '고령군', '성주군', '칠곡군', '예천군', '봉화군', '울진군', '울릉군'],
    gyeongnam: ['창원시', '진주시', '통영시', '사천시', '김해시', '밀양시', '거제시', '양산시', '의령군', '함안군', '창녕군', '고성군', '남해군', '하동군', '산청군', '함양군', '거창군', '합천군'],
    jeju: ['제주시', '서귀포시']
};

// 시군구 업데이트 함수
function updateGugun() {
    const sidoSelect = document.getElementById('sido-select');
    const gugunSelect = document.getElementById('gugun-select');
    const selectedSido = sidoSelect.value;
    
    // 시군구 선택 초기화
    gugunSelect.innerHTML = '<option value="">전체</option>';
    
    if (selectedSido && addressData[selectedSido]) {
        addressData[selectedSido].forEach(gugun => {
            const option = document.createElement('option');
            option.value = gugun;
            option.textContent = gugun;
            gugunSelect.appendChild(option);
        });
    } else {
        gugunSelect.innerHTML = '<option value="">시도를 먼저 선택하세요</option>';
    }
}

// 전체 선택/해제 기능
function toggleSelectAll() {
    const selectAllCheckbox = document.getElementById('selectAll');
    const rowCheckboxes = document.querySelectorAll('.row-checkbox');
    
    rowCheckboxes.forEach(checkbox => {
        checkbox.checked = selectAllCheckbox.checked;
    });
}

// 개별 체크박스 변경 시 전체 선택 체크박스 상태 업데이트
function updateSelectAllState() {
    const selectAllCheckbox = document.getElementById('selectAll');
    const rowCheckboxes = document.querySelectorAll('.row-checkbox');
    const checkedCount = document.querySelectorAll('.row-checkbox:checked').length;
    
    selectAllCheckbox.checked = checkedCount === rowCheckboxes.length;
    selectAllCheckbox.indeterminate = checkedCount > 0 && checkedCount < rowCheckboxes.length;
}

// 컬럼 표시/숨김 토글 함수
function toggleColumn(columnValue) {
    const columnIndex = getColumnIndex(columnValue);
    if (columnIndex === -1) return;
    
    const table = document.querySelector('table');
    if (!table) return;
    
    const headerCells = table.querySelectorAll('thead th');
    const rows = table.querySelectorAll('tbody tr');
    
    // 헤더 토글
    if (headerCells[columnIndex]) {
        const isHidden = headerCells[columnIndex].style.display === 'none';
        headerCells[columnIndex].style.display = isHidden ? '' : 'none';
        
        // 모든 행의 해당 컬럼 토글
        rows.forEach(row => {
            const cell = row.cells[columnIndex];
            if (cell) {
                cell.style.display = isHidden ? '' : 'none';
            }
        });
    }
}

// 컬럼 인덱스 가져오기
function getColumnIndex(columnValue) {
    const columnMap = {
        'name': 1,          // 이름
        'gender': 2,        // 성별
        'email': 3,         // 이메일
        'phone': 4,         // 휴대전화
        'birth': 5,         // 생년월일
        'address': 6,       // 주소
        'device': 7,        // 사용기종
        'korean-assoc': 8   // 한국AI속기사협회
    };
    return columnMap[columnValue] || -1;
}

// 컬럼선택 드롭다운 변경 처리
function handleColumnSelect() {
    const select = document.getElementById('columnSelect');
    const selectedValue = select.value;
    
    if (!selectedValue) return;
    
    // 옵션 요소 찾기
    const option = select.querySelector(`option[value="${selectedValue}"]`);
    if (!option) return;
    
    // 선택 상태 토글
    const isSelected = option.classList.contains('selected-column');
    
    if (isSelected) {
        // 선택 해제
        option.classList.remove('selected-column');
        option.textContent = option.textContent.replace('✓ ', '');
        toggleColumn(selectedValue); // 컬럼 숨김
    } else {
        // 선택
        option.classList.add('selected-column');
        option.textContent = '✓ ' + option.textContent;
        toggleColumn(selectedValue); // 컬럼 표시
    }
    
    // 선택 초기화 (드롭다운 닫기)
    select.value = '';
}

// 검색 폼 초기화 함수
function resetSearchForm() {
    // 모든 입력 필드 초기화
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        if (input.type !== 'checkbox') {
            input.value = '';
        } else {
            input.checked = false;
        }
    });
    
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        select.selectedIndex = 0;
    });
    
    // 시군구도 초기화
    if (typeof updateGugun === 'function') {
        updateGugun();
    }
}

// 상세조건 검색 토글 함수
function toggleAdvancedSearch() {
    const advancedSearchSection = document.getElementById('advanced-search');
    const toggleButton = event.target;
    
    if (advancedSearchSection) {
        if (advancedSearchSection.style.display === 'none' || advancedSearchSection.style.display === '') {
            // 상세조건 열기
            advancedSearchSection.style.display = 'block';
            toggleButton.textContent = '상세조건 닫기';
            toggleButton.style.backgroundColor = '#f59e0b';
        } else {
            // 상세조건 닫기
            advancedSearchSection.style.display = 'none';
            toggleButton.textContent = '상세조건';
            toggleButton.style.backgroundColor = '#6b7280';
        }
    }
}

// 페이지 로드 완료 시 초기화
function initializePage() {
    // 회원 관리 서브메뉴 기본으로 열기
    const memberSubmenu = document.getElementById('member-submenu');
    if (memberSubmenu) {
        memberSubmenu.classList.add('expanded');
    }
    
    // 대시보드 페이지를 기본으로 로드
    showPage('dashboard');
    
    // 전체 선택 체크박스 이벤트 리스너
    const selectAllCheckbox = document.getElementById('selectAll');
    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener('change', toggleSelectAll);
    }
    
    // 개별 체크박스 이벤트 리스너
    const rowCheckboxes = document.querySelectorAll('.row-checkbox');
    rowCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateSelectAllState);
    });
    
    // 컬럼선택 드롭다운 이벤트 리스너
    const columnSelect = document.getElementById('columnSelect');
    if (columnSelect) {
        columnSelect.addEventListener('change', handleColumnSelect);
    }
    
    // 초기화 버튼 이벤트 리스너
    const resetButton = document.querySelector('.btn-outline');
    if (resetButton) {
        resetButton.addEventListener('click', resetSearchForm);
    }
}

// 페이지 로드 시 초기화 실행
document.addEventListener('DOMContentLoaded', initializePage); 