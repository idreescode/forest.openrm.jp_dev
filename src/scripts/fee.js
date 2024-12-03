(() => {
    const plans = document.querySelectorAll(
      ".fee-mobile .plan-card .plan-card-footer"
    );

    const otherPlans = document.querySelectorAll(".fee-mobile .plan-info");

    plans.forEach((plan) => {
      plan.addEventListener("click", () => {
        const isOpen = plan.classList.contains("open");
        const planInfo = plan.parentElement.parentElement.children[1];

        if (!isOpen) {
          otherPlans.forEach((plan) => (plan.className = "hidden plan-info"));
          plans.forEach((plan) => plan.classList.remove("open"));
        }

        plan.classList.toggle("open");
        planInfo.classList.toggle("hidden");
      });
    });

    document.addEventListener('DOMContentLoaded', () => {
      // Tab switching functionality
      const monthlyTab = document.getElementById("monthly-tab");
      const yearlyTab = document.getElementById("yearly-tab");

      // Function to update the prices, tax info, and notes dynamically
      const updatePlanDetails = (type) => {
          const plans = document.querySelectorAll(".plans-item");

          plans.forEach((plan) => {
              // Update the amount
              const amountElement = plan.querySelector(".ammount");
              if (amountElement) {
                  const newAmount = amountElement.getAttribute(`data-${type}`);
                  const currencySpan = amountElement.querySelector(".currency");
                  if (currencySpan) {
                      currencySpan.previousSibling.textContent = newAmount; // Update numeric value
                  }
              }

              // Update the tax info
              const taxInfoElement = plan.querySelector(".tax-info");
              if (taxInfoElement) {
                  taxInfoElement.textContent = taxInfoElement.getAttribute(`data-${type}`);
              }

              // Update the notes
              const notesElement = plan.querySelector(".notes");
              if (notesElement) {
                  notesElement.textContent = notesElement.getAttribute(`data-${type}`);
              }
          });
      };

      // Event listeners for switching between tabs
      monthlyTab.addEventListener("click", () => {
          updatePlanDetails("monthly");
          monthlyTab.classList.add("active");
          yearlyTab.classList.remove("active");
      });

      yearlyTab.addEventListener("click", () => {
          updatePlanDetails("yearly");
          yearlyTab.classList.add("active");
          monthlyTab.classList.remove("active");
      });

      // Initialize with monthly prices
      updatePlanDetails("monthly");



      // Collapsible functionality
      const setupCollapsible = () => {
          const collapsibles = document.querySelectorAll('.feature-tab-button');
          const contents = document.querySelectorAll('.feature-tab-content');
          const icons = document.querySelectorAll('.feature-tab-button .icon'); // Select all icons

          collapsibles.forEach((collapsible, index) => {
              // On page load, open all collapsible sections
              collapsible.classList.add('collaps');  // Add the 'collaps' class to all collapsibles
              contents[index].style.maxHeight = `${contents[index].scrollHeight}px`;  // Set the max-height to the scrollHeight to open the content
              icons[index].textContent = '-';  // Change icon to '-' when open
          });

          collapsibles.forEach((collapsible, index) => {
              collapsible.addEventListener('click', () => {
                  const isOpen = collapsible.classList.contains('collaps');
                  collapsible.classList.toggle('collaps', !isOpen);
                  contents[index].style.maxHeight = isOpen ? null : `${contents[index].scrollHeight}px`;

                  // Toggle icon between '-' and '+'
                  icons[index].textContent = isOpen ? '+' : '−';
              });
          });
      };

      setupCollapsible(); // Initial setup for collapsibles


      // Expandable feature functionality
      const expandButtons = document.querySelectorAll('.feature-expand-btn');

      expandButtons.forEach((expandButton) => {
          const featureExpand = expandButton.nextElementSibling; // Corresponding mobile-feature-expand-area
          const featureTemplate = document.getElementById('plansFeatures');

          expandButton.addEventListener('click', () => {
              const isExpanded = expandButton.getAttribute('data-expanded') === 'true';

              if (!isExpanded) {
                  // Append content to feature-expand section
                  featureExpand.innerHTML = '';
                  featureExpand.appendChild(featureTemplate.cloneNode(true));
                  featureExpand.style.display = 'block';

                  // Update button text, icon, and state
                  expandButton.querySelector('.icon').textContent = '−';
                  expandButton.querySelector('.text').textContent = '閉じる';
                  expandButton.setAttribute('data-expanded', 'true');
                  expandButton.classList.add('active')
                  // Re-setup collapsibles after adding content
                  setupCollapsible();
              } else {
                  // Hide feature-expand section
                  featureExpand.style.display = 'none';
                  featureExpand.innerHTML = '';

                  // Update button text, icon, and state
                  expandButton.querySelector('.icon').textContent = '+';
                  expandButton.querySelector('.text').textContent = '詳しく見る';
                  expandButton.setAttribute('data-expanded', 'false');
                  expandButton.classList.remove('active')
              }
          });
      });
    });
})();