document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
        
        // Chiudi la sidebar quando si clicca fuori (solo su mobile)
        document.addEventListener('click', function(event) {
            if (window.innerWidth <= 960) {
                if (!sidebar.contains(event.target) && 
                    !menuToggle.contains(event.target) && 
                    sidebar.classList.contains('active')) {
                    sidebar.classList.remove('active');
                }
            }
        });
        
        // Chiudi la sidebar quando si ridimensiona la finestra oltre la soglia mobile
        window.addEventListener('resize', function() {
            if (window.innerWidth > 960) {
                sidebar.classList.remove('active');
            }
        });
    }
});