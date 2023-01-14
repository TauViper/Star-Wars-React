export const changeCssVariables = (theme) => {
  const root = document.querySelector(':root');
  /**
   * root.style.setProperty('--theme-default-header', `var(--theme-${theme}-header)`)
   * root.style.setProperty('--theme-default-bgimage', `var(--theme-${theme}-bgimage)`)
   * root - обращение к классу root в index.css
   * style - обращение к стилу компонента
   * setProperty('параметр стиля к замене', 'заменить на стиль ') - усановка параметра стиля
   */

  const variables = ['header', 'bgimage'];
  variables.forEach((elem) => {
    root.style.setProperty(
      `--theme-default-${elem}`,
      `var(--theme-${theme}-${elem})`
    );
  });
};
