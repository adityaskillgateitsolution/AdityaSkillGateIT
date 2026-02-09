import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Check, MessageCircle } from 'lucide-react';
import { PRICING_PLANS } from '../constants';

const OfferPopup: React.FC = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    // SHOW POPUP IMMEDIATELY ON PAGE LOAD
    useEffect(() => {
        setShouldRender(true);
        setTimeout(() => setIsVisible(true), 10);
    }, []);

    const closePopup = () => {
        setIsVisible(false);
        setTimeout(() => {
            setShouldRender(false);
        }, 500);
    };

    if (!shouldRender) return null;

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
                onClick={closePopup}
            />

            {/* Popup Container */}
            <div
                className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-slate-100 dark:border-slate-800 transition-all duration-500 transform ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-12'
                    }`}
            >
                {/* Close Button */}
                <button
                    onClick={closePopup}
                    className="absolute top-6 right-6 p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors z-10"
                >
                    <X size={20} />
                </button>

                <div className="flex flex-col lg:flex-row">
                    {/* Left Side */}
                    <div className="w-full lg:w-1/3 p-6 md:p-8 lg:p-12 bg-blue-600 text-white flex flex-col justify-center">
                        <span className="inline-block py-1 px-4 bg-white/20 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                            Exclusive Offer
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 md:mb-6 leading-tight">
                            Limited-Time <br className="hidden md:block" /> 2026 Offer
                        </h2>
                        <p className="text-blue-100 mb-8">
                            Launch your career or business with our professionally crafted
                            starter kits.
                        </p>

                        <div className="space-y-4">
                            {['Industry Verified', '100% Practical'].map((text) => (
                                <div key={text} className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                        <Check size={16} />
                                    </div>
                                    <span className="text-sm font-medium">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side – Pricing Cards */}
                    <div className="w-full lg:w-2/3 p-6 md:p-8 lg:p-12 bg-slate-50 dark:bg-slate-900/50">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {PRICING_PLANS.map((plan) => (
                                <div
                                    key={plan.id}
                                    className={`bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 flex flex-col transition-all hover:shadow-xl ${plan.highlighted ? 'ring-2 ring-blue-500' : ''
                                        }`}
                                >
                                    <div
                                        className={`mb-4 w-full h-2 rounded-full bg-gradient-to-r ${plan.gradient}`}
                                    />
                                    <h3 className="text-xs font-black text-slate-400 dark:text-slate-500 tracking-widest mb-1 uppercase">
                                        {plan.title}
                                    </h3>
                                    <div className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                                        {plan.price}
                                    </div>

                                    <ul className="space-y-3 mb-8 flex-grow">
                                        {plan.features.slice(0, 3).map((f, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-2 text-[11px] text-slate-600 dark:text-slate-400 leading-tight"
                                            >
                                                <Check
                                                    size={12}
                                                    className="text-blue-500 mt-0.5 flex-shrink-0"
                                                />
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                        onClick={() => {
                                            const subject = `Inquiry about ${plan.title}`;
                                            const message = `Hello Aditya Skill Gate, I'm interested in the ${plan.title} (Offer Price: ${plan.price}). Please provide more details.`;
                                            navigate('/contact', { state: { subject, message, scrollToForm: true } });
                                            closePopup();
                                        }}
                                        className={`w-full py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all active:scale-95 ${plan.highlighted
                                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                            : 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600'
                                            }`}
                                    >
                                        <MessageCircle
                                            size={14}
                                            className={plan.highlighted ? 'text-white' : 'text-green-500'}
                                        />
                                        Get Offer
                                    </button>
                                </div>
                            ))}
                        </div>

                        <p className="text-center text-[10px] text-slate-400 mt-8">
                            *T&C Apply. Offer valid for a limited period only.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferPopup;
