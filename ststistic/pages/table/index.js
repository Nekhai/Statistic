import { useTable } from 'react-table'
import DATA from "./data"
import {useMemo} from "react";
import dayjs from "dayjs"

export default function TablePage() {
    const data = useMemo(() => DATA, [])
    const columns = useMemo(() => [
        {
            accessor: "task",
            Header: "Task",
            Footer: "Task",
        },
        {
            Header: "Info",
            Footer: "Info",
            columns: [
                {
                    accessor: "status",
                    Header: "Status",
                    Footer: "Status",
                },
                {
                    accessor: "due",
                    Header: "Due",
                    Footer: "Due",
                    Cell: ({value}) => dayjs(value).format("YYYY-MM-DD")
                },
                {
                    accessor: "notes",
                    Header: "Notes",
                    Footer: "Notes",
                },
            ]
        },
    ], [])

    const {getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow} = useTable({
        data,
        columns
    })

    return <table {...getTableProps()}>
            <thead>
            {
                headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                            ))
                        }
                    </tr>
                ))
            }
            </thead>
            <tbody {...getTableBodyProps()}>
            {
                rows.map(row  => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {
                                row.cells.map(cell => {
                                    return (<td {...cell.getCellProps()}>{cell.render("Cell")}</td>)
                                })
                            }
                        </tr>
                    )
                })
            }

            </tbody>
            <tfoot>
            {
                footerGroups.map(footerGroup => (
                    <tr {...footerGroup.getHeaderGroupProps()}>
                        {
                            footerGroup.headers.map(column => (
                                <th {...column.getFooterProps()}>{column.render("Footer")}</th>
                            ))
                        }
                    </tr>
                ))
            }
            </tfoot>
        </table>
};
