﻿// ==========================================================================
//  Squidex Headless CMS
// ==========================================================================
//  Copyright (c) Squidex UG (haftungsbeschraenkt)
//  All rights reserved. Licensed under the MIT license.
// ==========================================================================

using Squidex.Domain.Apps.Core.Apps;
using Squidex.Domain.Apps.Core.Teams;
using Squidex.Shared.Users;

namespace Squidex.Domain.Apps.Entities.Collaboration;

public sealed class NoopUserNotifications : IUserNotifications
{
    public bool IsActive
    {
        get => false;
    }

    public Task SendInviteAsync(IUser assigner, IUser user, App app,
        CancellationToken ct = default)
    {
        return Task.CompletedTask;
    }

    public Task SendInviteAsync(IUser assigner, IUser user, Team team,
        CancellationToken ct = default)
    {
        return Task.CompletedTask;
    }

    public Task SendUsageAsync(IUser user, App app, long usage, long limit,
        CancellationToken ct = default)
    {
        return Task.CompletedTask;
    }
}
