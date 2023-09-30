/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState, useEffect, useMemo } from 'react';
import { useTable } from 'react-table';
import "./AdminDashboard.css";
import { getAllCoffeeShops, updateCoffeeShop } from '../../../services/api';

const AdminDashboard = () => {
    const [data, setData] = useState([]);
    const [editedRows, setEditedRows] = useState({});

    useEffect(() => {
        getAllCoffeeShops()
            .then(response => {
                setData(response.data); // Accede al array interno 'data'
            })
            .catch(error => {
                console.error("Error fetching the coffee shops: ", error);
            });
    }, []);
    

    const handleEdit = (id, field, value) => {
        setEditedRows(prev => {
            let updatedRow = Object.assign({}, prev[id] || {}, { [field]: value });
            return Object.assign({}, prev, { [id]: updatedRow });
        });
    };

    const handleSave = (id) => {
        if (editedRows[id]) {
            updateCoffeeShop(id, editedRows[id])
                .then(() => {
                    console.log("Updated successfully!");
                })
                .catch(error => {
                    console.error("Error updating the coffee shop: ", error);
                });
    
            setEditedRows(prev => {
                let newState = Object.assign({}, prev);
                delete newState[id];
                return newState;
            });
        }
    };

    const columns = useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name',
                Cell: ({ row, value }) => (
                    <input 
                        type="text" 
                        defaultValue={value}
                        onBlur={e => handleEdit(row.data.id, 'name', e.target.value)}  
                    />
                )
            },
            {
                Header: 'Address',
                accessor: 'address',
                // eslint-disable-next-line react/prop-types
                Cell: ({ row, value }) => (
                    <input 
                        type="text" 
                        defaultValue={value}
                        onBlur={e => handleEdit(row.data.id, 'address', e.target.value)}  
                    />
                )
            },
            {
                Header: 'Description',
                accessor: 'description',
                Cell: ({ row, value }) => (
                    <input 
                        type="text" 
                        defaultValue={value}
                        onBlur={e => handleEdit(row.data.id, 'description', e.target.value)}  
                    />
                )
            },
            {
                Header: 'Photo',
                accessor: 'photo',
                Cell: ({ row, value }) => (
                    <input 
                        type="text" 
                        defaultValue={value}
                        onBlur={e => handleEdit(row.data.id, 'photo', e.target.value)}  
                    />
                )
            },
            {
                Header: 'State',
                accessor: 'state',
                Cell: ({ row, value }) => (
                    <select 
                        defaultValue={value}
                        onBlur={e => handleEdit(row.data.id, 'state', e.target.value)}
                    >
                        <option value="Suggested">Suggested</option>
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                )
            },
            {
                Header: 'Save',
                accessor: 'save',
                Cell: ({ row }) => (
                    <button onClick={() => handleSave(row.data.id)}>Save</button>
                )
            }
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({ columns, data });

    return (
        <div className="admin-dashboard">
            <h2>Admin Panel</h2>
            <table {...getTableProps()} className="-striped -highlight">
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default AdminDashboard;

