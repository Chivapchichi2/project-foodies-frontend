import Photo from 'src/assets/categories/categories-beef.jpg';
import { useEffect, useCallback } from 'react';
import styles from './card.module.css';

export const Card = () => {
    function mapNumberRange(n, a, b, c, d) {
        return ((n - a) * (d - c)) / (b - a) + c;
    }

    const initCard = useCallback((card) => {
        const cardContent = card.querySelector(`.${styles.card__content}`);
        const gloss = card.querySelector(`.${styles.card__gloss}`);

        if (!cardContent || !gloss) {
            console.error('Missing card content or gloss elements');
            return;
        }

        requestAnimationFrame(() => {
            gloss.classList.add(styles['card__gloss--animatable']);
        });

        const handleMouseMove = (e) => {
            const pointerX = e.clientX;
            const pointerY = e.clientY;

            const cardRect = card.getBoundingClientRect();

            const halfWidth = cardRect.width / 2;
            const halfHeight = cardRect.height / 2;

            const cardCenterX = cardRect.left + halfWidth;
            const cardCenterY = cardRect.top + halfHeight;

            const deltaX = pointerX - cardCenterX;
            const deltaY = pointerY - cardCenterY;

            const distanceToCenter = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            const maxDistance = Math.max(halfWidth, halfHeight);

            const degree = mapNumberRange(distanceToCenter, 0, maxDistance, 0, 10);

            const rx = mapNumberRange(deltaY, 0, halfWidth, 0, 1);
            const ry = mapNumberRange(deltaX, 0, halfHeight, 0, 1);

            cardContent.style.transform = `perspective(400px) rotate3d(${-rx}, ${ry}, 0, ${degree}deg)`;

            gloss.style.transform = `translate(${-ry * 100}%, ${-rx * 100}%) scale(2.4)`;
            gloss.style.opacity = `${mapNumberRange(distanceToCenter, 0, maxDistance, 0, 0.6)}`;
        };

        const handleMouseLeave = () => {
            cardContent.style = null;
            gloss.style.opacity = '0';
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    useEffect(() => {
        const cards = document.querySelectorAll(`.${styles.card}`);
        if (!cards.length) {
            console.error('No cards found');
            return;
        }
        const cleanups = [];
        cards.forEach((card) => cleanups.push(initCard(card)));

        return () => {
            cleanups.forEach((cleanup) => cleanup && cleanup());
        };
    }, [initCard]);

    return (
        <div className={styles.card}>
            <div className={styles.card__content}>
                <div className={styles.card__gloss}></div>
                <img className={styles.card__image} src={Photo} alt="Photo" />
            </div>
        </div>
    );
};
