import './style.css';

(async () => {
  const rootElem = document.querySelector<HTMLElement>('main');
  if(
    rootElem
  ) {
    const filePath = './module/' + rootElem.id + '.ts';
    const pageRenderFunc = await import(filePath);
    
    pageRenderFunc[rootElem.id]();
  }
})();
