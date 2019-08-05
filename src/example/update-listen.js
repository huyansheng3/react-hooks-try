class FriendStatus extends React.Component {
  state = { isOnline: null };

  componentDidMount() {
    ChatAPI.subscribeToFriendStatus(this.props.friend.id, this.handleStatusChange);
  }

  componentWillUnmount() {
    ChatAPI.unsubscribeFromFriendStatus(this.props.friend.id, this.handleStatusChange);
  }

  handleStatusChange = (status) => {
    this.setState({ isOnline: status.isOnline });
  }

  render() {
    if (this.state.isOnline === null) return 'Loading...';
    return this.state.isOnline ? 'Online' : 'Offline';
  }
}

function useStatusChange(id, onChange) {
  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(id, onChange);
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(id, onChange);
    };
  }, [id]);
}

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useStatusChange(props.friend.id, setIsOnline)

  if (isOnline === null) return 'Loading...';
  return isOnline ? 'Online' : 'Offline';
}