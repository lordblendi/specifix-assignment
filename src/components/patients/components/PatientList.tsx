import React from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

import { useAppDispatch, type RootState } from "../../../store"
import { fetchPatients, setCurrentPage, setFilter } from "../slice"
import { getFilteredAndPaginatedPatients } from "../selectors"

const PatientList = (): JSX.Element => {
    const dispatch = useAppDispatch()

    const patientsState = useSelector((state: RootState) => state.patients)
    const { filter, currentPage, pageSize, patients } = patientsState
    const filteredAndPatients = getFilteredAndPaginatedPatients(patientsState)

    React.useEffect(() => {
        dispatch(fetchPatients())
    }, [])

    const onChange = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>): void => {
            dispatch(setFilter(event.target.value))
        },
        [],
    )

    const hasPrevious = currentPage > 0
    const hasNext = patients.length > currentPage * pageSize + pageSize

    const setPrevious = (): void => {
        if (hasPrevious) {
            dispatch(setCurrentPage(currentPage - 1))
        }
    }

    const setNext = (): void => {
        if (hasNext) {
            dispatch(setCurrentPage(currentPage + 1))
        }
    }

    // calculate the visible elements for pagination
    const firstVisible = currentPage * pageSize + 1
    let lastVisible = firstVisible + pageSize
    if (lastVisible > patients.length) {
        lastVisible = patients.length
    }

    return (
        <div className="sidebar">
            <input
                onChange={onChange}
                placeholder="Search patients by name"
                defaultValue={filter}
            />

            <div className="sidebar__listContainer">
                {filteredAndPatients.length > 0 ? (
                    <ul className="sidebar__list">
                        {filteredAndPatients.map(
                            (patient, index): JSX.Element => (
                                <li
                                    key={index}
                                    className="sidebar__listElement"
                                >
                                    <NavLink to={`/patients/${patient.id}`}>
                                        {patient.name}
                                    </NavLink>
                                </li>
                            ),
                        )}
                    </ul>
                ) : (
                    <div className="sidebar__list--empty">
                        No patients are registered in the system.
                    </div>
                )}
            </div>

            <div className="tw-flex tw-justify-between tw-items-center">
                <button
                    className="button button--inverted"
                    onClick={setPrevious}
                    disabled={!hasPrevious}
                >
                    Previous
                </button>
                {patients.length > 0 && (
                    <span className="label is-inverted">
                        {firstVisible} - {lastVisible} / {patients.length}
                    </span>
                )}
                <button
                    className="button button--inverted"
                    onClick={setNext}
                    disabled={!hasNext}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default PatientList
