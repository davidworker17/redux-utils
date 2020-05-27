import React, { Component } from 'react';
import Registry from './registry';

const createDynamicModule = (config) => {
  class DynamicModule extends Component {
    state = {
      ModuleConfig: null
    };

    componentWillMount() {
      const { name, loader } = config;

      if(!loader) throw new Error("loader function need to be defined");

      loader().then(ModuleConfig => {
        const setup = {
          name,
          ...ModuleConfig,
        };

        Registry.add(setup);
        this.setState({ ModuleConfig: setup });
      });
    }

    // componentWillUnmount() {
    //   const { ModuleConfig } = this.state;
    //
    //   if(ModuleConfig) {
    //     Registry.remove(ModuleConfig.name)
    //   }
    // }

    render() {
      const { ModuleConfig } = this.state;

      if(!ModuleConfig) return null;

      const Component = ModuleConfig.Module;
      Component.displayName = ModuleConfig.name;

      return <Component {...this.props} />;
    }
  }
  return DynamicModule;
}

export default createDynamicModule;
