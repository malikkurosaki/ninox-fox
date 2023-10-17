'use client'

import { Modal, Switch } from "@mantine/core";
import { useState } from "react";
import ModalDelCandidate from "./modal_del_candidate";
import { useAtom } from "jotai";
import { isModalCandidate } from "../val/isModalCandidate";

export default function SwitchStatusCandidate({ status }: { status: boolean }) {
    const [checked, setChecked] = useState(status)
    const [openModal, setOpenModal] = useAtom(isModalCandidate)

    function onConfirmation({ value }: { value: boolean }) {
        setOpenModal(true)
        // setChecked(value)
        console.log(value);
    }


    return (
        <>
            <Switch checked={checked} size="md" onLabel="ON" offLabel="OFF" onChange={(val) => {
                onConfirmation({ value: val.currentTarget.checked })
            }} />

            <Modal
                opened={openModal}
                onClose={() => setOpenModal(false)}
                centered
                withCloseButton={false}
                closeOnClickOutside={false}
            >
                <ModalDelCandidate />
            </Modal>
        </>
    )
}