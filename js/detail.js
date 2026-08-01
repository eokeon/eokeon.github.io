function openPdfModal(pdfUrl, title = '📄 문서 미리보기', excelUrl = null) {
    const modal = document.getElementById('pdfModal');
    const iframe = document.getElementById('pdfFrame');
    const modalTitle = document.getElementById('pdfModalTitle');
    const excelBtn = document.getElementById('excelDownloadBtn');

    if (modalTitle) {
        modalTitle.textContent = title;
    }

    // 미리보기 설정 (PDF면 브라우저 기본 툴바 제거)
    if (pdfUrl.toLowerCase().endsWith('.pdf')) {
        iframe.src = pdfUrl + '#toolbar=0';
    } else {
        iframe.src = pdfUrl;
    }

    // 다운로드 파일 지정 (엑셀 경로가 넘어온 경우 엑셀, 없으면 PDF/이미지 파일 다운로드)
    const downloadTarget = excelUrl ? excelUrl : pdfUrl;
    if (excelBtn) {
        excelBtn.href = downloadTarget;
        const fileName = downloadTarget.substring(downloadTarget.lastIndexOf('/') + 1);
        excelBtn.setAttribute('download', fileName);
        excelBtn.style.display = 'inline-flex';
    }

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// 모달 닫기 함수
function closePdfModal(event) {
    if (!event || event.target.id === 'pdfModal' || event.target.classList.contains('pdf-close-btn') || event.target.closest('.pdf-close-btn')) {
        const modal = document.getElementById('pdfModal');
        const iframe = document.getElementById('pdfFrame');

        if (modal) modal.style.display = 'none';
        if (iframe) iframe.src = '';

        document.body.style.overflow = 'auto';
    }
}

// ESC 키 입력 시 닫기
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePdfModal();
    }
});