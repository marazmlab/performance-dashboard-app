import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds, offset = 80) {
    const [activeId, setActiveId] = useState(sectionIds[0]);

    useEffect(() => {
        const onScroll = () => {
            let current = sectionIds[0];
            sectionIds.forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= offset) {
                        current = id;
                    }
                }
            });
            setActiveId(current);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [sectionIds, offset]);

    return activeId;
}