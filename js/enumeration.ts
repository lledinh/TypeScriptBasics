{
    enum Status {
        InOffice,
        Remote,
        oOff
    }

    enum Rank {
        Head = "Head",
        ServicesDirector = "Services Director",
        FinancialDirector = "FinancialDirector"
    }

    enum ListFlag {
        None,
        Flag1 = 1 << 0,
        Flag2 = 1 << 1,
        Flag3 = 1 << 2
    }
}