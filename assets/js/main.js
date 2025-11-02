const numberFormatter = new Intl.NumberFormat('en-IN');

const serviceDetails = {
    'ui-design': {
        title: 'Interface & UI Design',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
        description: 'Component-driven interfaces and design tokens that drop straight into your engineering workflow.',
        points: [
            'UI foundations, typography, and colour systems tuned for dark and light modes.',
            'Reusable components with documentation your product and marketing teams can share.',
            'Design QA support to ensure the shipped build mirrors the crafted intent.'
        ]
    },
    'web-build': {
        title: 'Marketing & Product Websites',
        image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1200&q=80',
        description: 'Conversion-first websites with modular CMS blocks, rapid load times, and accessibility baked in.',
        points: [
            'Launch orchestration across Webflow, Next.js, or custom stacks with detailed handover.',
            'SEO-ready pages, schema, and analytics hooks that activate on day zero.',
            'Ongoing optimisation playbooks covering experiments, localisation, and content ops.'
        ]
    },
    'product-strategy': {
        title: 'Product Strategy Sprints',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
        description: 'Runway-planning sprints that connect audience insight, roadmap priorities, and launch messaging.',
        points: [
            'Collaborative workshops that surface positioning, differentiation, and market fit.',
            'Journey maps and service blueprints linking product milestones to go-to-market levers.',
            'North-star metrics and guardrails that keep future releases aligned to measurable impact.'
        ]
    },
    prototyping: {
        title: 'Interactive Prototype Theatre',
        image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80',
        description: 'Scenario-driven prototypes that combine motion, narration, and data to accelerate buy-in.',
        points: [
            'Clickable demos with branching flows tailored for sales, fundraising, and onboarding.',
            'Integrated video, audio, and telemetry so viewers feel like they are using the live product.',
            'Guided story scripts and presenter notes to keep every walkthrough consistent.'
        ]
    },
    'brand-identity': {
        title: 'Brand & Launch Identity',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
        description: 'Narrative, motion, and visual systems that cement how your product shows up in every channel.',
        points: [
            'Logo refreshes, typography, and colour palettes optimised for digital environments.',
            'Motion guidelines covering micro-interactions, hero sequences, and reveal moments.',
            'Asset kits for decks, socials, and video with usage rules to scale your story.'
        ]
    },
    'growth-analytics': {
        title: 'Growth Analytics & Enablement',
        image: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1200&q=80',
        description: 'A measurement and enablement layer that keeps product, marketing, and revenue teams aligned.',
        points: [
            'Dashboards that translate behaviour data into actions for GTM and product squads.',
            'Automation blueprints syncing CRM, support, and analytics platforms around launch events.',
            'Playbooks, scripts, and training portals so every champion can pitch with confidence.'
        ]
    }
};

const articleDetails = {
    'immersive-demos': {
        title: 'Designing immersive demo operating systems',
        paragraphs: [
            'For the new Aithentic website we prototyped each hero slide in Figma, then layered GSAP micro-movements to keep the story lively without adding weight.',
            'Our demo operating systems package motion specs, presenter notes, and asset libraries so product, marketing, and revenue squads can retell the same story flawlessly.'
        ],
        list: {
            title: 'Inside this playbook',
            items: [
                'Story architecture frameworks adaptable to any GTM milestone.',
                'Motion and interaction patterns that keep visitors exploring, not scanning.',
                'Governance tips that help teams update content without losing momentum.'
            ]
        }
    },
    'launch-analytics': {
        title: 'Measuring launch resonance with live analytics',
        paragraphs: [
            'Every screen in this build is wired to track scroll depth, CTA intent, and carousel engagement so we know exactly what to iterate next.',
            'We convert analytics into conversation-ready dashboards that sales, product, and leadership can skim in minutes.'
        ],
        list: {
            title: 'What we cover',
            items: [
                'Event models that connect showcases to CRM and product analytics tools.',
                'Cohort views that surface how personas explore and where they convert.',
                'Experiment loops that translate insight into the next release sprint.'
            ]
        }
    },
    'team-enablement': {
        title: 'Enablement stacks that keep teams launch-ready',
        paragraphs: [
            'Behind the scenes we documented every component, colour token, and copy block so future updates stay on-message.',
            'Enablement hubs keep onboarding smooth, from project kick-off checklists to video explainers and certification paths.'
        ],
        list: {
            title: 'Enablement ingredients',
            items: [
                'Persona-based talk tracks, objection handlers, and visual references.',
                'Self-serve training modules with checklists, quizzes, and refresher prompts.',
                'Feedback loops that collect field intel and route it back to product quickly.'
            ]
        }
    }
};

const footerServiceDetails = {
    'other-services': {
        title: 'Additional ways we help',
        paragraphs: [
            'Beyond launch showcases, our studio supports ongoing UX, content, and enablement needs with fast-turnaround pods.'
        ],
        list: {
            items: [
                'Design system maintenance, accessibility audits, and component QA.',
                'Webflow and headless CMS migrations with performance optimisation.',
                'Content operations playbooks covering documentation, release notes, and onboarding.',
                'Founder and executive narrative coaching ahead of key demos or investor updates.'
            ]
        },
        note: 'Have a requirement that does not fit neatly into a capability? Start a discovery chat and we will assemble the right crew.'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initialiseSmoothScroll();
    initThirdPartyLibraries();
    setupServiceModal();
    setupCounters();
    setupContactForm();
    setupInsightModals();
    setupFooterSubscribe();
});

function initialiseSmoothScroll() {
    const navbar = document.querySelector('.navbar');
    const offset = navbar ? navbar.offsetHeight : 0;

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
            const hash = link.getAttribute('href');
            if (!hash || hash === '#' || hash.length <= 1) {
                return;
            }

            const target = document.querySelector(hash);
            if (!target) {
                return;
            }

            event.preventDefault();

            const top = target.getBoundingClientRect().top + window.pageYOffset - (offset + 12);
            window.scrollTo({
                top,
                behavior: 'smooth'
            });
        });
    });
}

function initThirdPartyLibraries() {
    if (window.AOS) {
        AOS.init({
            offset: 140,
            delay: 0,
            duration: 900,
            easing: 'ease',
            once: false,
            mirror: false,
            anchorPlacement: 'top-bottom'
        });
    }

    if (typeof Fancybox !== 'undefined') {
        Fancybox.bind('[data-fancybox="gallery"]', {
            Thumbs: {
                autoStart: false
            },
            Toolbar: {
                display: ['close']
            },
            dragToClose: false,
            animated: true
        });
    }

    if (typeof gsap !== 'undefined') {
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }

        initHeroAnimations();

        gsap.utils.toArray('.service-card, .contact-card').forEach((card) => {
            gsap.from(card, {
                opacity: 0,
                y: 40,
                duration: 0.9,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 90%'
                }
            });
        });
    }
}

function initHeroAnimations() {
    if (typeof gsap === 'undefined') {
        return;
    }

    const carousel = document.getElementById('heroCarousel');
    if (!carousel) {
        return;
    }

    const setSlideState = (slide, values) => {
        if (!slide) {
            return;
        }

        slide.querySelectorAll('[data-hero-title], [data-hero-subtitle], [data-hero-copy], [data-hero-cta] .btn').forEach((el) => {
            gsap.set(el, values);
        });
    };

    const animateSlide = (slide) => {
        if (!slide) {
            return;
        }

        const subtitle = slide.querySelector('[data-hero-subtitle]');
        const title = slide.querySelector('[data-hero-title]');
        const copy = slide.querySelector('[data-hero-copy]');
        const buttons = slide.querySelectorAll('[data-hero-cta] .btn');

        const timeline = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.9 } });
        if (subtitle) {
            timeline.to(subtitle, { opacity: 1, y: 0 });
        }
        if (title) {
            timeline.to(title, { opacity: 1, y: 0 }, subtitle ? '-=0.6' : '<');
        }
        if (copy) {
            timeline.to(copy, { opacity: 1, y: 0 }, '-=0.55');
        }
        if (buttons.length) {
            timeline.to(buttons, { opacity: 1, y: 0, stagger: 0.12 }, '-=0.5');
        }
    };

    const slides = carousel.querySelectorAll('.carousel-item');
    slides.forEach((slide) => setSlideState(slide, { opacity: 0, y: 40 }));

    const activeSlide = carousel.querySelector('.carousel-item.active');
    animateSlide(activeSlide);

    carousel.addEventListener('slide.bs.carousel', (event) => {
        setSlideState(event.relatedTarget, { opacity: 0, y: 40 });
    });

    carousel.addEventListener('slid.bs.carousel', (event) => {
        animateSlide(event.relatedTarget);
    });
}

function setupServiceModal() {
    const modal = document.getElementById('serviceModal');
    if (!modal) {
        return;
    }

    const modalTitle = modal.querySelector('[data-modal-title]');
    const modalDescription = modal.querySelector('[data-modal-description]');
    const modalList = modal.querySelector('[data-modal-list]');
    const modalImage = modal.querySelector('[data-modal-image]');
    const closeButtons = modal.querySelectorAll('[data-modal-close]');
    let lastFocusedElement = null;

    modal.setAttribute('aria-hidden', 'true');

    const renderModal = (service) => {
        modalTitle.textContent = service.title;
        modalDescription.textContent = service.description;
        modalImage.src = service.image;
        modalImage.alt = service.title;

        modalList.innerHTML = '';
        service.points.forEach((point) => {
            const item = document.createElement('li');
            item.textContent = point;
            modalList.appendChild(item);
        });
    };

    const openModal = (key) => {
        const service = serviceDetails[key];
        if (!service) {
            return;
        }

        renderModal(service);
        lastFocusedElement = document.activeElement;
        modal.classList.add('is-visible');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('no-scroll');

        const closeButton = modal.querySelector('.service-modal__close');
        window.requestAnimationFrame(() => {
            closeButton?.focus({ preventScroll: true });
        });
    };

    const closeModal = () => {
        modal.classList.remove('is-visible');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('no-scroll');
        if (lastFocusedElement instanceof HTMLElement) {
            lastFocusedElement.focus({ preventScroll: true });
        }
    };

    document.querySelectorAll('[data-service-key]').forEach((card) => {
        card.addEventListener('click', () => {
            openModal(card.dataset.serviceKey);
        });
    });

    closeButtons.forEach((button) => {
        button.addEventListener('click', closeModal);
    });

    modal.addEventListener('click', (event) => {
        if (event.target?.dataset?.modalClose !== undefined) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('is-visible')) {
            closeModal();
        }
    });
}

function setupCounters() {
    const counterCards = document.querySelectorAll('.counter-card');
    if (!counterCards.length) {
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            const counter = entry.target.querySelector('[data-counter-target]');
            if (!counter || counter.dataset.counterStarted === 'true') {
                return;
            }

            counter.dataset.counterStarted = 'true';
            startCounterLoop(counter);
        });
    }, { threshold: 0.4 });

    counterCards.forEach((card) => observer.observe(card));
}

function startCounterLoop(counterEl) {
    const target = Number(counterEl.dataset.counterTarget || 0);
    const suffix = counterEl.dataset.counterSuffix || '';
    const duration = Number(counterEl.dataset.counterDuration || 2000);
    const loopDelay = Number(counterEl.dataset.counterDelay || 2200);

    const animate = () => {
        const startTime = performance.now();

        const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const currentValue = Math.floor(progress * target);
            counterEl.textContent = `${numberFormatter.format(currentValue)}${suffix}`;

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                setTimeout(animate, loopDelay);
            }
        };

        counterEl.textContent = `0${suffix}`;
        requestAnimationFrame(step);
    };

    animate();
}

function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) {
        return;
    }

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const payload = {
            firstName: (formData.get('firstName') || '').trim(),
            lastName: (formData.get('lastName') || '').trim(),
            email: (formData.get('email') || '').trim(),
            phone: (formData.get('phone') || '').trim(),
            subject: (formData.get('subject') || '').trim(),
            message: (formData.get('message') || '').trim()
        };

        if (Object.values(payload).some((value) => !value)) {
            await showAlert({
                icon: 'warning',
                title: 'Missing information',
                text: 'Please fill in all the fields before submitting.'
            });
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(payload.email)) {
            await showAlert({
                icon: 'error',
                title: 'Invalid email',
                text: 'Please enter a valid email address so we can get back to you.'
            });
            return;
        }

        const phonePattern = /^[0-9+\-()\s]{7,}$/;
        if (!phonePattern.test(payload.phone)) {
            await showAlert({
                icon: 'error',
                title: 'Invalid phone number',
                text: 'Please provide a reachable phone number with at least seven digits.'
            });
            return;
        }

        const submitButton = form.querySelector('button[type="submit"]');
        const originalLabel = submitButton?.textContent || 'Send message';

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = 'Sending?';
        }

        try {
            await submitContactRequest({
                ...payload,
                submittedAt: new Date().toISOString()
            });

            await showAlert({
                icon: 'success',
                title: 'We received your message',
                text: 'Our team will be in touch within one business day.'
            });

            form.reset();
        } catch (error) {
            await showAlert({
                icon: 'error',
                title: 'Unable to submit right now',
                text: error?.message || 'Please try again or reach us at hello@aithentic.co.'
            });
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = originalLabel;
            }
        }
    });
}

async function submitContactRequest(payload) {
    if (typeof fetch !== 'function') {
        throw new Error('Please email us at hello@aithentic.co and we will respond quickly.');
    }

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            let errorMessage = 'We could not send your message. Please try again in a moment.';
            try {
                const errorBody = await response.json();
                if (errorBody?.message) {
                    errorMessage = errorBody.message;
                }
            } catch (error) {
                // Non-JSON response, keep default message
            }

            throw new Error(errorMessage);
        }

        return response.json().catch(() => ({}));
    } catch (error) {
        throw new Error(error?.message || 'We could not submit your message. Please try again.');
    }
}

function renderInfoModalContent(container, content) {
    container.innerHTML = '';

    (content?.paragraphs || []).forEach((text) => {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        container.appendChild(paragraph);
    });

    if (content?.list?.items?.length) {
        if (content.list.title) {
            const heading = document.createElement('h6');
            heading.className = 'text-white-50 text-uppercase small fw-semibold mb-2';
            heading.textContent = content.list.title;
            container.appendChild(heading);
        }

        const list = document.createElement('ul');
        list.className = 'info-modal__list';
        content.list.items.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item;
            list.appendChild(li);
        });
        container.appendChild(list);
    }

    if (content?.note) {
        const note = document.createElement('p');
        note.className = 'text-white-50 small mb-0';
        note.textContent = content.note;
        container.appendChild(note);
    }
}

function setupInsightModals() {
    const modalElement = document.getElementById('infoModal');
    if (!modalElement) {
        return;
    }

    const titleEl = modalElement.querySelector('[data-info-title]');
    const bodyEl = modalElement.querySelector('[data-info-body]');
    if (!titleEl || !bodyEl) {
        return;
    }

    const modalInstance = typeof bootstrap !== 'undefined' && bootstrap?.Modal
        ? new bootstrap.Modal(modalElement, {
            backdrop: true
        })
        : null;

    const openModal = (content, fallbackTitle) => {
        if (!content) {
            console.warn('No modal content available for', fallbackTitle);
            return;
        }

        titleEl.textContent = content.title || fallbackTitle || 'Details';
        renderInfoModalContent(bodyEl, content);

        if (modalInstance) {
            modalInstance.show();
        } else {
            modalElement.classList.add('show');
            modalElement.style.display = 'block';
        }
    };

    document.querySelectorAll('[data-article-trigger]').forEach((trigger) => {
        trigger.addEventListener('click', () => {
            const card = trigger.closest('[data-article-key]');
            if (!card) {
                return;
            }

            const key = card.dataset.articleKey;
            const fallbackTitle = card.querySelector('h5')?.textContent || trigger.textContent;
            openModal(articleDetails[key], fallbackTitle);
        });
    });

    document.querySelectorAll('[data-footer-service]').forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const key = link.dataset.footerService;
            openModal(footerServiceDetails[key], link.textContent);
        });
    });
}

function setupFooterSubscribe() {
    const form = document.getElementById('footerSubscribe');
    if (!form) {
        return;
    }

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const emailInput = form.querySelector('input[type="email"]');
        const email = (emailInput?.value || '').trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            await showAlert({
                icon: 'warning',
                title: 'Invalid email',
                text: 'Please enter a valid email address to join the digest.'
            });
            return;
        }

        await showAlert({
            icon: 'success',
            title: 'You are on the list',
            text: 'Expect monthly notes packed with launch rituals and product storytelling tips.'
        });

        form.reset();
    });
}

function showAlert(options) {
    if (typeof Swal !== 'undefined') {
        return Swal.fire({
            confirmButtonColor: '#44d125',
            ...options
        });
    }

    if (options?.text || options?.title) {
        alert(options.text || options.title);
    }

    return Promise.resolve();
}

