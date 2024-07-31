import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';
import { TModalData } from './type';

const initData: TModalData = {
    open: false,
    title: '',
    modalProps: undefined,
    conditionOpen: true,
    content: <></>,
};

export const modal = atom(initData);

export const useModal = () => useAtom(modal);
export const useModalValue = () => useAtomValue(modal);

export const useModalFunction = () => {
    const _setModalData = useSetAtom(modal);

    function setModalData(data: Partial<TModalData>) {
        _setModalData((prev) => {
            return {
                ...prev,
                ...data,
            };
        });
    }
    function openModal(data: Omit<TModalData, 'open'>) {
        setModalData({ ...data, open: true });
    }

    function closeModal() {
        setModalData({
            title: '',
            conditionOpen: true,
            open: false,
        });
    }

    return {
        setModalData,
        openModal,
        closeModal,
    };
};
