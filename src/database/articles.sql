-- TABLE

CREATE TABLE
    articles (
        id bigint generated by default as identity primary key,
        user_id uuid references auth.users not null,
        title text,
        content text,
        user_email text,
        inserted_at timestamp
        with
            time zone default timezone('utc':: text, now()) not null
    );

-- POLICIES

alter table articles enable row level security;

create policy "Users can create articles." on articles for
insert
with
    check (auth.uid() = user_id);

create policy "Users can update their own articles." on articles for
update
    using (auth.uid() = user_id);

create policy "Users can delete their own articles." on articles for
delete
    using (auth.uid() = user_id);

create policy "Articles are public" on articles for
select using (true);