'use client'
import { useAtom } from "jotai"
import _ from "lodash"
import { _valReadIdMlai } from "../val/val_mlai"

/**
 * Fungsi untuk menampilkan wrapper.
 * @param {id} id - menampilkan id.
 * @param {children} children - menampilkan children.
 * @returns Untuk menampilkan wrapper
 */
export default function Wrapper({ id, children }: { id: any, children: any }) {
    const [valRead, setRead] = useAtom(_valReadIdMlai)

    if (!valRead.includes(id)) {
        valRead.push(id)
    }

    return (children)
}