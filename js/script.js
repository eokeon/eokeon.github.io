document.addEventListener('DOMContentLoaded', () => {
    // 모든 시연 이미지에 클릭 이벤트 바인딩
    document.querySelectorAll('.media-frame img').forEach(img => {
        img.addEventListener('click', (e) => {
            e.stopPropagation();
            openModal(img.src);
        });
    });
});

function openModal(src) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    modal.style.display = 'flex';
    modalImg.src = src;
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

// ESC 키 입력 시 모달 닫기
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});