/*
 * Squidex Headless CMS
 *
 * @license
 * Copyright (c) Squidex UG (haftungsbeschränkt). All rights reserved.
 */

import { animate, AnimationTriggerMetadata, keyframes, state, style, transition, trigger } from '@angular/animations';

export function buildSlideRightAnimation(name = 'slideRight', timing = '150ms'): AnimationTriggerMetadata {
    return trigger(
        name, [
            transition(':enter', [
                style({ transform: 'translateX(-100%)' }),
                animate(timing, style({ transform: 'translateX(0%)' })),
            ]),
            transition(':leave', [
                style({ transform: 'translateX(0%)' }),
                animate(timing, style({ transform: 'translateX(-100%)' })),
            ]),
            state('true',
                style({ transform: 'translateX(0%)' }),
            ),
            state('false',
                style({ transform: 'translateX(-100%)' }),
            ),
            transition('1 => 0', animate(timing)),
            transition('0 => 1', animate(timing)),
        ],
    );
}

export function buildSlideAnimation(name = 'slide', timing = '400ms'): AnimationTriggerMetadata {
    return trigger(
        name, [
            transition(':enter', [
                style({ transform: 'translateX(100%)' }),
                animate(timing, style({ transform: 'translateX(0%)' })),
            ]),
            transition(':leave', [
                style({ transform: 'translateX(0%)' }),
                animate(timing, style({ transform: 'translateX(-100%)' })),
            ]),
            state('true',
                style({ transform: 'translateX(0%)' }),
            ),
            state('false',
                style({ transform: 'translateX(-100%)' }),
            ),
            transition('1 => 0', animate(timing)),
            transition('0 => 1', animate(timing)),
        ],
    );
}

export function buildFadeAnimation(name = 'fade', timing = '150ms'): AnimationTriggerMetadata {
    return trigger(
        name, [
            transition(':enter', [
                style({ opacity: 0 }),
                animate(timing, style({ opacity: 1 })),
            ]),
            transition(':leave', [
                style({ opacity: 1 }),
                animate(timing, style({ opacity: 0 })),
            ]),
            state('true',
                style({ opacity: 1 }),
            ),
            state('false',
                style({ opacity: 0 }),
            ),
            transition('1 => 0', animate(timing)),
            transition('0 => 1', animate(timing)),
        ],
    );
}

export function buildBounceAnimation(name = 'bounce', timing = '150ms'): AnimationTriggerMetadata {
    return trigger(
        name, [
            transition('* => true', [
                animate(timing, keyframes([
                    style({ transform: 'translateX(0)' }),
                    style({ transform: 'translateX(-10px)' }),
                    style({ transform: 'translateX(0)' }),
                ])),
            ]),
        ],
    );
}

export const bounceAnimation = buildBounceAnimation();
export const fadeAnimation = buildFadeAnimation();
export const slideAnimation = buildSlideAnimation();
export const slideRightAnimation = buildSlideRightAnimation();
