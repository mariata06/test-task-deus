const initBenefitTabs = () => {
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.tab-panel');

  tabs.forEach((tab) => {
    tab.addEventListener('click', function () {
      const targetTab = tab.dataset.tab;

      tabs.forEach((t) => t.classList.remove('active'));
      panels.forEach((p) => p.classList.remove('active'));

      tab.classList.add('active');
      document.querySelector(`.tab-panel[data-tab="${targetTab}"]`).classList.add('active');
    });
  });
};

export {initBenefitTabs};
