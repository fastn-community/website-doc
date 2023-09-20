function clampDecrement(a,n) {
    let newValue = (a.get() - 1) ;
    if (newValue < 0) {
        newValue = n.get() - 1;
    }
    a.set(newValue);
}
