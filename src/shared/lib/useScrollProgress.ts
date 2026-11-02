import { useEffect, type RefObject } from 'react'

// Пишет в CSS-переменную --scroll-progress число от 0 до 1: насколько элемент
// уже ушёл вверх за край экрана (0 - стоит на месте, 1 - ушёл целиком).
// Стили сами решают, что с этим делать.
// Значение пишем прямо в DOM, а не в состояние React: иначе компонент
// перерисовывался бы на каждый пиксель прокрутки
export function useScrollProgress(ref: RefObject<HTMLElement | null>) {
    useEffect(() => {
        const element = ref.current
        if (!element) return

        // Тем, у кого отключены анимации, эффект не включаем
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        let frame = 0

        const update = () => {
            frame = 0
            const { top, height } = element.getBoundingClientRect()
            const progress = Math.min(Math.max(-top / height, 0), 1)

            element.style.setProperty('--scroll-progress', progress.toFixed(3))
        }

        // Не чаще одного раза за кадр
        const requestUpdate = () => {
            if (!frame) frame = requestAnimationFrame(update)
        }

        update()
        window.addEventListener('scroll', requestUpdate, { passive: true })
        window.addEventListener('resize', requestUpdate)

        return () => {
            window.removeEventListener('scroll', requestUpdate)
            window.removeEventListener('resize', requestUpdate)
            cancelAnimationFrame(frame)
        }
    }, [ref])
}
