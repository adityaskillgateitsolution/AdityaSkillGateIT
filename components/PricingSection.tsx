import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, MessageCircle } from 'lucide-react';
import { PRICING_PLANS } from '../constants';

const PricingSection: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block py-1 px-4 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                        Exclusive Offer
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
                        EXCLUSIVE OFFER
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400">
                        Limited-time 2026 offer. Elevate your career with our specialized starter kits.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-stretch">
                    {PRICING_PLANS.map((plan) => (
                        <div
                            key={plan.id}
                            className={`relative flex flex-col p-8 rounded-[2.5rem] bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] group ${plan.highlighted ? 'z-10 shadow-xl' : 'z-0'
                                }`}
                        >
                            {plan.highlighted && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className={`mb-8 p-6 rounded-3xl bg-gradient-to-br ${plan.gradient} text-white`}>
                                <h3 className="text-lg font-bold tracking-wider mb-2">{plan.title}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-extrabold">{plan.price}</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 group/item">
                                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                                            <Check size={14} className="text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <span className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => {
                                    const subject = `Inquiry about ${plan.title}`;
                                    const message = `Hello Aditya Skill Gate, I'm interested in the ${plan.title} (Offer Price: ${plan.price}). Please provide more details about this starter kit.`;
                                    navigate('/contact', { state: { subject, message, scrollToForm: true } });
                                }}
                                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 ${plan.highlighted
                                    ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50'
                                    : 'bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700'
                                    }`}
                            >
                                <div className="flex items-center gap-2">
                                    <MessageCircle size={18} className={plan.highlighted ? 'text-white' : 'text-green-500'} />
                                    {plan.cta}
                                </div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
