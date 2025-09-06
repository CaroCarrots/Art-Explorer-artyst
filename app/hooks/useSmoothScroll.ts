import { useEffect } from 'react';

// 丝滑滚动优化 Hook
export function useSmoothScroll() {
  useEffect(() => {
    // 启用硬件加速
    document.documentElement.style.setProperty('transform', 'translateZ(0)');
    document.documentElement.style.setProperty('will-change', 'scroll-position');
    
    // 优化滚动事件
    let ticking = false;
    
    const optimizeScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          ticking = false;
        });
        ticking = true;
      }
    };

    // 添加被动滚动监听器
    const scrollOptions = { passive: true };
    window.addEventListener('scroll', optimizeScroll, scrollOptions);
    window.addEventListener('wheel', optimizeScroll, scrollOptions);
    window.addEventListener('touchmove', optimizeScroll, scrollOptions);

    // 清理函数
    return () => {
      window.removeEventListener('scroll', optimizeScroll);
      window.removeEventListener('wheel', optimizeScroll);
      window.removeEventListener('touchmove', optimizeScroll);
      document.documentElement.style.removeProperty('transform');
      document.documentElement.style.removeProperty('will-change');
    };
  }, []);
}

// 丝滑滚动到指定元素
export function smoothScrollToElement(elementId: string, offset: number = 0) {
  const element = document.getElementById(elementId);
  if (element) {
    const targetPosition = element.offsetTop - offset;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}

// 获取当前滚动进度
export function getScrollProgress(): number {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  return scrollHeight > 0 ? scrollTop / scrollHeight : 0;
}
