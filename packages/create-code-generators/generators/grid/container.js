import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {{moduleName}} from '../../core/{{moduleName}}';
import Component from '../../components/{{moduleName}}';

const mapStateToProps = createStructuredSelector({
  ...{{moduleName}}.selectors,
});

const mapDispatchToProps = {
  {{requestName}}: {{moduleName}}.actions.{{requestName}}.TRIGGER,
  refreshData: PutAway.actions.refreshData,
  purge: {{moduleName}}.actions.purge,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
