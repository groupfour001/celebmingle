// FAQ data
const faqs = [
    {
        question: "What is CelebMingle?",
        answer: "CelebMingle is a premium platform connecting fans with their favorite celebrities through exclusive content, live streams, and unique experiences."
    },
    {
        question: "How do I join CelebMingle?",
        answer: "Simply click 'Join Now' on the homepage or membership section, fill out the registration form, and choose your membership tier."
    },
    {
        question: "What membership plans are available?",
        answer: "We offer Super Fan, VIP Fan, and Registration tiers, each with unique benefits and pricing. See the Membership section for details."
    },
    {
        question: "Can I meet celebrities in person?",
        answer: "Yes! Our platform offers virtual meet-and-greets and exclusive event opportunities for select members."
    },
    {
        question: "Is my data safe on CelebMingle?",
        answer: "Absolutely. We use advanced security measures to protect your privacy and personal information."
    },
    {
        question: "How do I contact support?",
        answer: "You can reach our 24/7 support team via the Contact page or by emailing support@celebmingle.com."
    },
    {
        question: "Can I cancel my membership?",
        answer: "Yes, you can cancel anytime from your account dashboard. Your benefits will remain active until the end of your billing cycle."
    },
    {
        question: "What payment methods are accepted?",
        answer: "We accept major credit cards, PayPal, Stripe, and select cryptocurrencies."
    },
    {
        question: "How do I access exclusive content?",
        answer: "Once you become a member, log in to your account to unlock exclusive videos, live streams, and more."
    },
    {
        question: "Is CelebMingle available worldwide?",
        answer: "Yes, our platform is accessible globally, though some features may vary by region."
    }
];

// Render FAQ items
function renderFAQs() {
    const faqList = document.querySelector('.faq-list');
    faqList.innerHTML = '';
    faqs.forEach((faq, idx) => {
        const item = document.createElement('div');
        item.className = 'faq-item';
        item.innerHTML = `
            <div class="faq-question"><i class="fas fa-question"></i> ${faq.question}</div>
            <div class="faq-answer">${faq.answer}</div>
        `;
        item.addEventListener('click', function() {
            item.classList.toggle('active');
        });
        faqList.appendChild(item);
    });
}

document.addEventListener('DOMContentLoaded', renderFAQs);
