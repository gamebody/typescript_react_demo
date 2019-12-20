/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState, RootDispatch } from '../../store'
import { Filter as FilterType, setVisibilityFilter } from '../../store/actions'

let Filter:FC<Props> = ({ filter, onClick }) => {
    return (
        <div>
            { filter === 'SHOW_ALL' ? '全部' : <a href="#" onClick={() => onClick('SHOW_ALL')}>全部</a> }，
            { filter === 'SHOW_COMPLETED' ? '已完成' : <a href="#" onClick={() => onClick('SHOW_COMPLETED')}>已完成</a> }，
            { filter === 'SHOW_ACTIVE' ? '未完成' : <a href="#" onClick={() => onClick('SHOW_ACTIVE')}>未完成</a> }，
        </div>
    )
}
const mapStateToProps = (state: RootState) => {
    return {
        filter: state.visibilityFilter
    }
}
const mapDispatchToProps = (dispatch: RootDispatch) => {
    return {
        onClick: (filter: FilterType) => {
            dispatch(setVisibilityFilter(filter))
        }
    }
}
const connetor = connect(mapStateToProps, mapDispatchToProps)
type Props = ConnectedProps<typeof connetor>

export default connetor(Filter)