document.addEventListener("DOMContentLoaded", function() {
    var tabs = document.querySelectorAll('.tab');
    var contents = document.querySelectorAll('.rcontent');

    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            var target = this.getAttribute('data-target');
            contents.forEach(function(content) {
                content.classList.remove('active', 'fadeIn', 'fadeInFromTop', 'fadeInFromBottom');
                if (content.classList.contains('fadeOut')) {
                    content.classList.remove('fadeOut');
                } else {
                    content.classList.add('fadeOut');
                }
            });
            var targetContent = document.getElementById(target);
            targetContent.classList.remove('fadeOut');
            var activeIndex = Array.from(contents).findIndex(content => content.classList.contains('active'));
            var targetIndex = Array.from(contents).findIndex(content => content.id === target);
            if (targetIndex > activeIndex) {
                targetContent.classList.add('active', 'fadeInFromBottom');
            } else {
                targetContent.classList.add('active', 'fadeInFromTop');
            }
        });
    });
});