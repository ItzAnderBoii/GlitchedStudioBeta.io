function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // Function to add the 'visible' class when the element is in the viewport
    function handleScroll() {
      const revealDiv = document.getElementById('scroll');
      if (isElementInViewport(scroll)) {
        scroll.classList.add('visible');
        revealDiv.classList.remove('hidden');
      }
    }

    // Listen for the scroll event
    window.addEventListener('scroll', handleScroll);