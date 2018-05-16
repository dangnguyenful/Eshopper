import React from 'react'
import PropTypes from 'prop-types'
import { getAllProducts } from '../actions'
import { connect } from 'react-redux'
import ProductsList from './ProductsList'

const mapStateToProps = state => ({
  products: state.getAllProducts
})

export default connect(
  mapStateToProps
)(ProductsList)