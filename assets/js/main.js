const numberFormatter = new Intl.NumberFormat('en-IN');

const serviceDetails = {
    narrative: {
        title: 'Launch Narrative Systems',
        image: './assets/images/aithentic-capability-1.svg',
        description: 'Translate your roadmap into a coherent story that guides buyers, investors, and internal teams.',
        points: [
            'Audience-specific messaging operating systems spanning landing pages, decks, and enablement.',
            'Hero sequencing, tonal palettes, and motion briefs engineered for every launch phase.',
            'Interactive story maps aligning product, marketing, and revenue milestones.'
        ]
    },
    prototyping: {
        title: 'Interactive Prototype Theatre',
        image: './assets/images/aithentic-capability-2.svg',
        description: 'High-fidelity demos that mirror live data and product states across devices and touchpoints.',
        points: [
            'Responsive prototypes instrumented with scenario switching, dynamic data, and guided tour modes.',
            'Sales and investor-ready walkthroughs crafted for async sharing or live conversations.',
            'Component libraries and design tokens that accelerate engineering hand-off and build sprints.'
        ]
    },
    analytics: {
        title: 'Analytics Story Canvas',
        image: './assets/images/aithentic-capability-3.svg',
        description: 'Surface the numbers behind every interaction with narrative-friendly dashboards.',
        points: [
            'Event architecture connecting showcases to CRM, marketing automation, and product analytics.',
            'Story-driven dashboards that adapt in real-time to stakeholder context and questions.',
            'Experiment playbooks that guide optimisation after launch using qualitative and quantitative inputs.'
        ]
    },
    customizers: {
        title: 'Dynamic Product Customizers',
        image: './assets/images/aithentic-capability-4.svg',
        description: 'Empower audiences to explore possibilities through guided configuration and scenario tools.',
        points: [
            'Visual configurators with pricing, add-on logic, localisation, and ROI narratives.',
            'Outcome simulators that reflect feature availability, integrations, and delivery timelines.',
            'Performance-optimised experiences that embed seamlessly inside landing pages or sales platforms.'
        ]
    },
    automation: {
        title: 'Launch Automation Pipelines',
        image: './assets/images/aithentic-capability-5.svg',
        description: 'Orchestrate launch communications and operations from a single connected pipeline.',
        points: [
            'CRM, marketing automation, and sales triggers aligned to showcase milestones and visitor signals.',
            'Slack, email, and dashboard alerts that keep GTM, product, and leadership teams synchronised.',
            'Version-controlled asset hubs with analytics tracking for every release moment.'
        ]
    },
    support: {
        title: 'Always-on Support Systems',
        image: './assets/images/aithentic-capability-6.svg',
        description: 'Keep teams launch-ready with knowledge centers, playbooks, and training loops.',
        points: [
            'Enablement portals with scripts, FAQs, and persona-based talking points.',
            'Live and asynchronous training experiences complete with certification-ready materials.',
            'Post-launch optimisation sprints anchored to data, customer feedback, and success metrics.'
        ]
    }
};

const articleDetails = {
    'immersive-demos': {
        title: 'Designing immersive demo operating systems',
        paragraphs: [
            'Launch experiences perform best when story beats, motion, and data instrumentation act in unison. We start with the questions your audience will ask and build interactive scenes that answer them before they?re spoken.',
            'Aithentic choreographs cross-functional demo operating systems so product, marketing, and revenue teams stay aligned even as the roadmap evolves.'
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
            'Instrumenting a showcase is more than adding pageview tags. We blend qualitative signals with quantified behaviours so your team knows what to reinforce after launch.',
            'Dashboards are designed for conversations?whether you?re in an investor review or daily stand-up.'
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
            'Launches succeed when every customer-facing teammate shares the same voice. Our enablement stacks package scripts, FAQs, and artefacts that stay fresh over time.',
            'From onboarding to certifications, we help you build rituals that retain knowledge even as teams scale.'
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
            'Beyond launch showcases, our studio supports the entire product storytelling lifecycle with fast-turnaround squads.'
        ],
        list: {
            items: [
                'Brand identity refresh sprints that align visuals with your new narrative.',
                'Persona, buyer-journey, and UX research labs to shape future releases.',
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

        gsap.set('[data-hero-title], [data-hero-subtitle], [data-hero-copy], [data-hero-cta] a', {
            opacity: 0,
            y: 60
        });
        gsap.set('.hero-metric', {
            opacity: 0,
            y: 25
        });
        gsap.set('[data-hero-visual]', {
            opacity: 0,
            y: 40,
            scale: 0.96
        });

        const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });
        heroTimeline
            .to('[data-hero-title]', { opacity: 1, y: 0 })
            .to('[data-hero-subtitle]', { opacity: 1, y: 0 }, '-=0.65')
            .to('[data-hero-copy]', { opacity: 1, y: 0 }, '-=0.55')
            .to('[data-hero-cta] a', { opacity: 1, y: 0, stagger: 0.12 }, '-=0.45')
            .to('[data-hero-visual]', { opacity: 1, y: 0, scale: 1 }, '-=0.55')
            .to('.hero-metric', { opacity: 1, y: 0, stagger: 0.1 }, '-=0.5');

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
            confirmButtonColor: '#7b61ff',
            ...options
        });
    }

    if (options?.text || options?.title) {
        alert(options.text || options.title);
    }

    return Promise.resolve();
}

