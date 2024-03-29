/*
 * Squidex Headless CMS
 *
 * @license
 * Copyright (c) Squidex UG (haftungsbeschränkt). All rights reserved.
 */

import { Placement } from '@floating-ui/dom';
import { BehaviorSubject, Observable } from 'rxjs';

export type FloatingPlacement = Placement | [Placement, 'inside' | 'outside'];

export interface Openable {
    isOpenChanges: Observable<boolean>;

    isOpen: boolean;
}

export class DialogModel implements Openable {
    private readonly isOpen$: BehaviorSubject<boolean>;

    public get isOpenChanges(): Observable<boolean> {
        return this.isOpen$;
    }

    public get isOpen(): boolean {
        return this.isOpen$.value;
    }

    constructor(isOpen = false) {
        this.isOpen$ = new BehaviorSubject<boolean>(isOpen);
    }

    public show(): DialogModel {
        this.isOpen$.next(true);

        return this;
    }

    public hide(): DialogModel {
        this.isOpen$.next(false);

        return this;
    }

    public toggle(): DialogModel {
        this.isOpen$.next(!this.isOpen$.value);

        return this;
    }
}

export class ModalModel implements Openable {
    private static openModal?: ModalModel | null = null;
    private readonly isOpen$: BehaviorSubject<boolean>;

    public get isOpenChanges(): Observable<boolean> {
        return this.isOpen$;
    }

    public get isOpen(): boolean {
        return this.isOpen$.value;
    }

    constructor(isOpen = false) {
        this.isOpen$ = new BehaviorSubject<boolean>(isOpen);
    }

    public show(): ModalModel {
        if (!this.isOpen$.value) {
            if (ModalModel.openModal && ModalModel.openModal !== this) {
                ModalModel.openModal.hide();
            }

            ModalModel.openModal = this;

            this.isOpen$.next(true);
        }

        return this;
    }

    public hide(): ModalModel {
        if (this.isOpen$.value) {
            if (ModalModel.openModal === this) {
                ModalModel.openModal = null;
            }

            this.isOpen$.next(false);
        }

        return this;
    }

    public toggle(): ModalModel {
        if (this.isOpen$.value) {
            this.hide();
        } else {
            this.show();
        }

        return this;
    }
}
