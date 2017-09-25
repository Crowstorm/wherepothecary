import React from 'react';
import { connect } from 'react-redux'

const Leki = (props) => (
    <div>
        <h1>Tu beda leki</h1>
        {props.renderedDrugs.length}
    </div>
)

const mapStateToProps = (state) => {
    return {
        renderedDrugs: state.renderedDrugs
    }
}

export default connect(mapStateToProps)(Leki)


// const ConnectedLeki = connect((state) => {
//     return {
//         renderedDrugs: state.renderedDrugs
//     }
// })(Leki);

// export default ConnectedLeki;