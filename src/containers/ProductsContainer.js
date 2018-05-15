import React from 'react'
import PropTypes from 'prop-types'
import { getAllProducts } from '../actions'
import { connect } from 'react-redux'
import ProductsList from './ProductsList'

const mapStateToProps = state => ({
  products: [{title:'a'}, {title:'b'}]
})

const mapDispatchToProps = dispatch => ({
  getAllProducts: products => dispatch(getAllProducts(products))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList)